import { inject, TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { User, UserType } from '../entities/user';

describe('AuthGuardService', () => {
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spyUserService = jasmine.createSpyObj('UserService', ['isUserLoggedIn', 'getUser']);
    const spyRouter = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [AuthGuardService,
        {provide: UserService, useValue: spyUserService},
        {provide: Router, useValue: spyRouter}
      ]
    });
    userServiceSpy = TestBed.get(UserService);
    routerSpy = TestBed.get(Router);
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));

  it('should redirect to login if no user is logged in', inject([AuthGuardService], (service: AuthGuardService) => {
    userServiceSpy.isUserLoggedIn.and.returnValue(false);

    expect(service.canActivateChild(null, null)).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  }));

  it('should redirect to gdpr if logged in NRW user has not accepted the challenge',
    inject([AuthGuardService], (service: AuthGuardService) => {
    userServiceSpy.isUserLoggedIn.and.returnValue(true);
    const loggedInUser = new User();
    loggedInUser.userType = UserType.NEW_REFWORKS;
    loggedInUser.acceptedGDPRChallengeRW3 = false;

    userServiceSpy.getUser.and.returnValue(loggedInUser);

    expect(service.canActivateChild(null, null)).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['gdpr-consent']);
  }));

  it('should redirect to gdpr if logged in LRW user has not accepted the challenge',
    inject([AuthGuardService], (service: AuthGuardService) => {
    userServiceSpy.isUserLoggedIn.and.returnValue(true);
    const loggedInUser = new User();
    loggedInUser.userType = UserType.LEGACY;
    loggedInUser.acceptedGDPRChallengeRW2 = false;

    userServiceSpy.getUser.and.returnValue(loggedInUser);

    expect(service.canActivateChild(null, null)).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['gdpr-consent']);
  }));

  it('should redirect to gdpr if logged in NRW user has accepted the challenge',
    inject([AuthGuardService], (service: AuthGuardService) => {
      userServiceSpy.isUserLoggedIn.and.returnValue(true);
      const loggedInUser = new User();
      loggedInUser.userType = UserType.NEW_REFWORKS;
      loggedInUser.acceptedGDPRChallengeRW3 = true;

      userServiceSpy.getUser.and.returnValue(loggedInUser);

      expect(service.canActivateChild(null, null)).toBe(true);
      expect(routerSpy.navigate).not.toHaveBeenCalledWith(['gdpr-consent']);
    }));

  it('should redirect to gdpr if logged in LRW user has accepted the challenge',
    inject([AuthGuardService], (service: AuthGuardService) => {
      userServiceSpy.isUserLoggedIn.and.returnValue(true);
      const loggedInUser = new User();
      loggedInUser.userType = UserType.LEGACY;
      loggedInUser.acceptedGDPRChallengeRW2 = true;

      userServiceSpy.getUser.and.returnValue(loggedInUser);

      expect(service.canActivateChild(null, null)).toBe(true);
      expect(routerSpy.navigate).not.toHaveBeenCalledWith(['gdpr-consent']);
    }));


});

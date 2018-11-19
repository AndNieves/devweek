import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(private router: Router) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return true;
  }

  /*
    private checkLogin(): boolean {

      if (this.userService.isUserLoggedIn()) {
        return true;
      }


      // No login, navigate to the login page
      this.router.navigate(['/login']);
      return false;
    }

    private checkGDPR(): boolean {
      if (this.userService.getUser().userType === UserType.NEW_REFWORKS && this.userService.getUser().acceptedGDPRChallengeRW3) {
        return true;
      }

      if (this.userService.getUser().userType === UserType.LEGACY && this.userService.getUser().acceptedGDPRChallengeRW2) {
        return true;
      }

      // No gdpr consent, navigate to the consent page
      this.router.navigate(['gdpr-consent']);
      return false;
    }
  */
}

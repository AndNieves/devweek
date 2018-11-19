import {Injectable} from '@angular/core';
import {Day, WeekDays} from '../entities/day';
import {ParkingPlace} from '../entities/parking-place';
import {User} from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() {
  }

  getReservationsForDay(weekDay: WeekDays) {
    const day = new Day();
    day.name = weekDay;
    const parkingPlaces: ParkingPlace[] = [];
    for (let i = 0; i < 10; i++) {
      const parkingPlace = new ParkingPlace();
      const user = new User();
      user.name = i.toString();
      parkingPlace.confirmed = true;
      parkingPlace.assignedTo = user;
      parkingPlaces.push(parkingPlace);
    }
    day.parkingPlaces = parkingPlaces;
    return day;

  }
}

import {ParkingPlace} from './parking-place';

export class Day {
  name: WeekDays;
  date: Date;
  parkingPlaces: ParkingPlace[];
}

export enum WeekDays {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday'
}

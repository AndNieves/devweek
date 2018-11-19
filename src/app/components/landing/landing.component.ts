import {Component, OnInit} from '@angular/core';
import {ReservationsService} from '../../services/reservations.service';
import {WeekDays} from '../../entities/day';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  days = [];

  constructor(private reservationsService: ReservationsService) {
  }

  ngOnInit() {
    this.days = Object.keys(WeekDays)
      .map(key => this.reservationsService.getReservationsForDay(WeekDays[key]));
  }


}

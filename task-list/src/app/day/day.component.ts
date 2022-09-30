import { Component, Input, OnInit } from '@angular/core';
import { dayInterface } from '../interface/day.interface'; 

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html'
})
export class DayComponent implements OnInit {

  @Input() dayData: dayInterface = {
    day_date: "", 
    completion_level: 0, 
    tasks: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}

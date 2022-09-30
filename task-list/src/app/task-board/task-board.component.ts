import { Component, OnInit } from '@angular/core';
import { dayInterface } from '../interface/day.interface'; 

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html'
})
export class TaskBoardComponent implements OnInit {

  constructor() { }

  public displayDays: Array<dayInterface> = [     
    {
    day_date: '2022-08-20',
    completion_level: 80,
    tasks: [
      {
        id: 1,
        name: 'Wynieść śmieci',
        description: 'Wywalić śmieci i żwirek dla kota',
        status: 'not_done',
        importance: 'important',
        deadline_time: '12:00:00',
        type: 'house_hold',
      },
      {
        id: 2,
        name: 'Umyć naczynia',
        description: 'załadować zmywarkę i posprzątać blaty',
        status: 'not_done',
        importance: 'low',
        deadline_time: '22:00:00',
        type: 'house_hold',
      },
      {
        id: 3,
        name: 'Nauka Symfony',
        description: 'Paginacja, Wysyłka danych do Api, formularze',
        status: 'in_progress',
        importance: 'important',
        type: 'self_development',
      }
    ]
  },
  {
    day_date: '2022-08-21',
    completion_level: 80,
    tasks: [
      {
        id: 4,
        name: 'Siłownia',
        description: 'Klata + triceps',
        status: 'not_done',
        importance: 'important',
        type: 'self_development',
      },
    ]
  },
  {
    day_date: '2022-08-22',
    completion_level: 80,
    tasks: [
      {
        id: 5,
        name: 'Nauka Angulara',
        description: 'Przerobić jeszcze raz serwisy i komunikację komponentów',
        status: 'in_progress',
        importance: 'medium',
        deadline_time: '22:00:00',
        type: 'self_development',
      },
    ]
  },
  {
    day_date: '2022-08-23',
    completion_level: 80,
    tasks: [
      {
        id: 6,
        name: 'Prezent dla Teresy',
        description: 'Może herbate jakąś bardziej fancy?',
        status: 'in_progress',
        importance: 'important',
        deadline_time: '10:00:00',
        type: 'other',
      },
    ],
  },
  {
    day_date: '2022-08-24',
    completion_level: 80,
    tasks: [
      {
        id: 7,
        name: 'Siłownia',
        description: 'Klata + triceps',
        status: 'not_done',
        importance: 'important',
        type: 'self_development',
      },
    ]
  },
];

  ngOnInit(): void {
  }
}

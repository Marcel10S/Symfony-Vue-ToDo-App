import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  constructor() { }

  public displayDays: Array<any> = [ // zamiast any dać nowo stworzony interfejs     
    {
    day_date: '2022-08-20',
    completion_level: 80,
    taks: {
      1: {
        name: 'Wynieść śmieci',
        description: 'Wywalić śmieci i żwirek dla kota',
        status: 'not_done',
        importance: 'important',
        deadline_time: '12:00:00',
        type: 'house_hold',
      },
      2: {
        name: 'Umyć naczynia',
        description: 'załadować zmywarkę i posprzątać blaty',
        status: 'not_done',
        importance: 'low',
        deadline_time: '22:00:00',
        type: 'house_hold',
      },
      3: {
        name: 'Nauka Symfony',
        description: 'Paginacja, Wysyłka danych do Api, formularze',
        status: 'in_progress',
        importance: 'important',
        deadline_time: null,
        type: 'self_development',
      },
    }
  },
  {
    day_date: '2022-08-21',
    completion_level: 80,
    tasks: {
      4: {
        name: 'Siłownia',
        description: 'Klata + triceps',
        status: 'not_done',
        importance: 'important',
        deadline_time: null,
        type: 'self_development',
      },
    }
  },
  {
    day_date: '2022-08-22',
    completion_level: 80,
    tasks: {
      5: {
        name: 'Nauka Angulara',
        description: 'Przerobić jeszcze raz serwisy i komunikację komponentów',
        status: 'in_progress',
        importance: 'medium',
        deadline_time: '22:00:00',
        type: 'self_development',
      },
    }
  },
  {
    day_date: '2022-08-23',
    completion_level: 80,
    tasks: {
      6: {
        name: 'Prezent dla Teresy',
        description: 'Może herbate jakąś bardziej fancy?',
        status: 'in_progress',
        importance: 'important',
        deadline_time: '10:00:00',
        type: 'other',
      },
    },
  },
  {
    day_date: '2022-08-24',
    completion_level: 80,
    tasks: {
      7: {
        name: 'Siłownia',
        description: 'Klata + triceps',
        status: 'not_done',
        importance: 'important',
        deadline_time: null,
        type: 'self_development',
      },
    }
  },
];

  ngOnInit(): void {
  }
}

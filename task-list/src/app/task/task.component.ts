import { Component, Input, OnInit } from '@angular/core';
import { taskInterface } from '../interface/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {

  @Input() taskData: taskInterface = {    
      id: 0,
      name: "",
      description: "",
      status: "",
      importance: "",
      type: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import {TASKS} from '../../mock-task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Input() task: Task = TASKS[0];
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
 
  faTimes= faTimes;


  constructor() { }

  ngOnInit(): void {}


  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}

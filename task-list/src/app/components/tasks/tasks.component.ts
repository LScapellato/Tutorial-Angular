import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
    ) { }

  

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void{  
  this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
      
    ;
  }
    deleteTask(task: Task){
      this.tasks=this.tasks.filter(t =>  t.id !== task.id);
      this.taskService.deleteTask(task).subscribe();
      
     // this.taskService.deleteTask(task)
     //.subscribe(()=> {
     //   this.tasks = this.tasks.filter(t => {return t.id !== task.id})
    }
  }
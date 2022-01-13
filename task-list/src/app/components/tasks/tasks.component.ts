import { Component, OnInit} from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';


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
    
    this.taskService.getTasks().subscribe(tasks => {this.tasks = tasks});
  }

  getTasks(): void{  
  this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
      
    ;
  }
  deleteTask(task: Task){
    
      this.tasks=this.tasks.filter(t =>  t.id !== task.id);
      this.taskService.deleteTask(task).subscribe();
     /*1:34 videotutorial Arquitectura SPA
     this.taskService.deleteTask(task)
     .subscribe(()=> {this.tasks = this.tasks.filter(t => {return t.id !== task.id})*/
  }
  toggleReminder(task: Task){
      task.reminder = !task.reminder
      this.taskService.updateTaskReminder(task).subscribe();

  }
    
  addTask(task: Task) {
      
      /*this.tasks.push(task);
      this.taskService.addTask(task).subscribe();*/
     this.taskService.addTask(task).subscribe((task) => {this.tasks.push(task);})

  
  }
}  
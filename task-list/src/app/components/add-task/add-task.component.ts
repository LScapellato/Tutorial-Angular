import { DatePipe } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription }from 'rxjs'
import { UiService } from '../../service/ui.service';
import { Task } from '../../Task'


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
@Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id: any= 15;
  text: string= "";
  day: Date | undefined;
  reminder: boolean= false;
<<<<<<< Updated upstream

  constructor() { }
=======
  showAddTask: boolean= false;
>>>>>>> Stashed changes

  subscription?: Subscription;
  
  constructor ( 
    private uiService:  UiService
    ){
       this.subscription = this.uiService.onToggle()
    .subscribe (value=> this.showAddTask = value );
   }  
  
  ngOnInit(): void {
  }
  onSubmit(){ 
    if(this.text === ""){
   
    //if(this.text.length === 0){
      alert("Es necesario agregar tarea");
    }
    const { id, text, day, reminder} = this;
    const newTask = {id, text, day, reminder}
    
<<<<<<< Updated upstream
    this.onAddTask.emit(newTask);
=======
    const {text, day, reminder} = this;
    const newTask = { text , day, reminder }
    
    this.onAddTask.emit(newTask); 
    //console.log(newTask); //envia a taskscomponent.html
    //TODO emit event
    
>>>>>>> Stashed changes
  }

}



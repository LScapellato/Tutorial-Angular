import { Component, OnInit } from '@angular/core';
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string= 'Mi Lista de Tareas';
  showAddTask:boolean = false;
  subscription?: Subscription;
  
  constructor( private uiService:UiService) { }
    
  

  ngOnInit(): void {
  }
  toggleAddTask() {
    //console.log("toggleAddTask");
    this.uiService.toggleAddTask();
    

  }

}
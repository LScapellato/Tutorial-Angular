import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import{TASKS} from '../mock-task';
import{Task} from '../Task';
import {Observable, of} from 'rxjs';

const httpOptions ={
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://localhost:5001/tasks'

  constructor(
    
    private http:HttpClient) { }
  
  getTasks(): Observable <Task[]> {
    //const task=of (TASKS);
     return this.http.get<Task[]>(this.apiUrl) 
  } 

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    //cuando usamos template literal como la linea anterior usamos comillas invertidas
    return this.http.delete<Task>(url);
  }
  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task)
  }


  addTask(task: Task): Observable<Task>{
   console.log(task)
   

    return this.http.post<Task> (this.apiUrl, task, httpOptions );
    
  }
  } 
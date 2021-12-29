import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import{TASKS} from '../mock-task';
import{Task} from '../Task';

const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl='http://localhost:3000/tasks'

  constructor(
    
    private http:HttpClient) { }
  
  getTasks(): Observable <Task[]> {
    //const task=of (TASKS);
     return this.http.get<Task[]>(this.apiUrl)

    
  } 
  deleteTask(task:Task): Observable<Task>{
    const url = '${this.apiUrl}/${task.id}';
    return this.http.delete<Task>(url);
  }

}

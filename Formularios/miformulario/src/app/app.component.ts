import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { _fecha } from './fecha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() onCargaFecha: EventEmitter<_fecha> = new EventEmitter();
  _fecha: Date | undefined;



ngOnInit(): void {
}

onSubmit(){
  console.log("funcionando")
 if(this.onCargaFecha.length === 0){
   alert("please add task");
 }}

agregaFecha(fecha: _fecha) {
  console.log(fecha)
}

}



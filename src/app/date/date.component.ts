import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  //message: string = "hello ririye";
  //message: string = new Date().toDateString();
  dateMessage: string;

  constructor() {
   // this.dateMessage = new Date().toDateString();
   setInterval(()=>{
     
   let currentDate = new Date(); 
   this.dateMessage = currentDate.toDateString() + ' '+
          currentDate.toLocaleTimeString();
   } ,1000);
   }

  ngOnInit() {
  }

}

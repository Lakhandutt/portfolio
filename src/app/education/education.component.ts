import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  tabdata=[
    {'name':'12th','school':'Vaish Model Sr. Sec. School','Subjects':'Non-Medical','Percentage':'72'},
    {'name':'UG','school':'Delhi University','Subjects':'B.sc. Computer science','Percentage':'68'},
    {'name':'PG','school':'Panjab University','Subjects':'Masters in Computer Science','Percentage':'67'}
    ];

  constructor() { }

  ngOnInit() {
  }

}

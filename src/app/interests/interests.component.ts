import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
 det=[
   {'name':'Programming','value':'Solving logic based Questions '},
   {'name':'Sports','value':'Running Vollyball Cricket Football'},
   {'name':'Others','value':'Listening songs and Travelling'}
   ];
  constructor() { }

  ngOnInit() {
  }

}

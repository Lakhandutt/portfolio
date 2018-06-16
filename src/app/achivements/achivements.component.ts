import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent implements OnInit {

   det=[
     { 'Achive':'First Position in Debugging Event in CGC Landran' },
     {'Achive':'Designed PU DCSA Department Magzine EPSILON-2018'},
     {'Achive':'Designed Placement Brochure of PU DCSA Department'}
   ]
  constructor() { }

  ngOnInit() {
  }

}

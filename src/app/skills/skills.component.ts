import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
 det=['C   C++   Java   C#','Html/Css/Javascript','Angular','Advance Java/Java Networking','CorelDraw','Bootstrap/Material','ASP.net ADO.net'];

  constructor() {
  }

  ngOnInit() {
  }
}

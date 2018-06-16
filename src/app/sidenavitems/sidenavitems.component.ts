import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavitems',
  templateUrl: './sidenavitems.component.html',
  styleUrls: ['./sidenavitems.component.css']
})
export class SidenavitemsComponent implements OnInit {

  menu = [
    {'name': 'Home', 'compattached': 'content','icon':'home'},
    {'name': 'About', 'compattached': 'about','icon':'person'},
    {'name': 'Education', 'compattached': 'education','icon':'school'},
    {'name': 'Skills', 'compattached': 'skills','icon':'build'},
    {'name': 'Projects', 'compattached': 'projects','icon':'books'},
    {'name': 'Workshop', 'compattached': 'workshops','icon':'work'},
    {'name': 'Achivements', 'compattached': 'achivements','icon':'sentiment_satisfied_alt'},
    {'name': 'Interests', 'compattached': 'interests','icon':'laptop'},
    {'name': 'Contact', 'compattached': 'contact','icon':'mail_outline'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.css']
})
export class WorkshopsComponent implements OnInit {

  datafull=[
    {'Workshop':'Hacking' ,'location':'IIT Delhi','keyskills':'Ethical-Hacking','discription':'Basic 1 day Workshop In Ethical Hacking'},
    {'Workshop':'Web ' ,'location':'In UIET,PU','keyskills':'HTML,CSS,Javascript','discription':' Basic frontend Development Workshop'},
    {'Workshop':'Java' ,'location':'In CBITSS','keyskills':'Advance-java','discription':'Summer training of Java from 12th June to 31 July 2017'}
    ];

  constructor() { }

  ngOnInit() {
  }

}

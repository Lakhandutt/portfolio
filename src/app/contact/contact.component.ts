import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  det =[
    {'prop':'Email','value':'lakhan.dcsa@gmail.com'},
    {'prop':'Phone NO','value':'8285786876'},
    {'prop':'Address','value':'Panjab University'}
  ];

  ngOnInit() {
  }

}

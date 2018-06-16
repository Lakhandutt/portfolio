import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  det =[
    {'prop':'Name','value':'Lakhan'},
    {'prop':'Gender','value':'Male'},
    {'prop':'Email','value':'lakhan.dcsa@gmail.com'},
    {'prop':'Languages','value':'Hindi English'},
    {'prop':'BirthDate','value':'23 March 1995'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

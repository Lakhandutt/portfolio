import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogdataComponent} from "../dialogdata/dialogdata.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  dialogResult="";

  constructor(public dialog: MatDialog) { }
  openDialog() {
    let dialogRef=this.dialog.open(DialogdataComponent, {

      data: {'name':'Contribution.com',
        'period':'10 Days',
        'teamsize':'3',
        'technologies':'Html/Css/Javascript  Java(.jsp) CorelDraw',
        'discription':'Contribution.com is a website for donating old clothes to the poor peoples and to make the society better and helpfull'
      }


    });
  }
  openDialog2() {
    let dialogRef=this.dialog.open(DialogdataComponent, {

      data: {'name':'Student Resume',
        'period':'10 Days',
        'teamsize':'1',
        'technologies':'Html/Css/Typescript  Angular framework and its libraries',
        'discription':'Student Resume is a Template of online Resume Website of a student'
      }


    });
  }

  ngOnInit() {
  }

}

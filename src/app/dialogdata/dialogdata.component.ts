import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialogdata',
  templateUrl: './dialogdata.component.html',
  styleUrls: ['./dialogdata.component.css']
})
export class DialogdataComponent implements OnInit {

  constructor(public thisDalogRef: MatDialogRef<DialogdataComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit() {
  }

  onCloseCancel(){
    this.thisDalogRef.close();
  }



}

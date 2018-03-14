import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Resource from './../../resource.json';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <PopupComponent>) { }

  ngOnInit() {

  }

  closeDialog() {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Resource from './../resource.json';
import { PopupComponent } from './popup/popup.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})

export class Page3Component implements OnInit {
  public people:any = [
    {"name" : "Daniel Dominici", "image" : "assets/daniel.jpg", "role" : "Programmatore"},
    {"name" : "Emanuele Bonelli", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Giorgia Uffreduzzi", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Piero Aiello", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Riccardo Franchi", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Federico Guidoni", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Pierfabio Sanna", "image" : "assets/user.png", "role" : "Programmatore"},
    {"name" : "Cristian Sandica", "image" : "assets/user.png", "role" : "Programmatore"},
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }


  openPopup(){
    let dialog= this.dialog.open(PopupComponent, {
      //height: '40px',
      width: '40%',
    });
  }

}

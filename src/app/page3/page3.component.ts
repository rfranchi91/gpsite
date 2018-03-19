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
  public capi:any = [
    {"name" : "Daniele Pugliese", "image" : "assets/user.png", "role" : "Administrator", "icon": "work"},
    {"name" : "Marco Tulli", "image" : "assets/user.png", "role" : "Technical Officer", "icon": "settings"},
  ];

  public office:any = [
    {"name" : "Nicla Monacis", "image" : "assets/user.png", "role" : "HR Management",  "icon": "group"},
    {"name" : "Paola Conticelli", "image" : "assets/user.png", "role" : "Office Management",  "icon": "info"}
  ];

  public developer_senior:any = [
    {"name" : "Roberto De Vivo", "image" : "assets/user.png", "role" : "Senior Developer",  "icon": "desktop_windows"},
    {"name" : "Mariella Venanzangeli", "image" : "assets/user.png", "role" : "Senior Developer",  "icon": "desktop_windows"},
    {"name" : "Federico Fieni", "image" : "assets/user.png", "role" : "Talend Specialist",  "icon": "desktop_windows"},
    {"name" : "Marco Filinesi", "image" : "assets/user.png", "role" : "Talend Specialist",  "icon": "desktop_windows"}
  ];
  public developer_junior:any = [
    {"name" : "Daniel Dominici", "image" : "assets/daniel.jpg", "role" : "Junior Developer",  "icon": "laptop"},
    {"name" : "Emanuele Bonelli", "image" : "assets/user.png", "role" : "Junior Developer",  "icon": "laptop"},
    {"name" : "Giorgia Uffreduzzi", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"},
    {"name" : "Piero Aiello", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"},
    {"name" : "Riccardo Franchi", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"},
    {"name" : "Yuliya Kovalenko ", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"},
    {"name" : "Pierfabio Sanna", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"},
    {"name" : "Giorgia Gesmundo", "image" : "assets/user.png", "role" : "Salesforce Specialist", "icon": "laptop"},
    {"name" : "Cristian Sandica", "image" : "assets/user.png", "role" : "Junior Developer", "icon": "laptop"}
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

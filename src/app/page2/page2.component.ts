import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Resource from './../resource.json';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-page2',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-30%)', opacity: 0}),
          animate('250ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('250ms', style({transform: 'translateY(-30%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  resource:any = Resource;

  public nameStr: string;
  public emailStr: string;
  public phoneStr: string;
  public messageStr: string;

  public fileName: string = null;
  public fileSelected: boolean = false;
  private pdf: string = null;
  public loading: boolean = false;

  public selectedAccordion: number = -1000;

  public opportunitiesSample = [
    {
    "title" : "Corso n.1",
    "skills": ["Programmer", "1", "2"]
    },
    {
    "title" : "Corso n.2",
    "skills": ["3", "4", "5", "6"]
    }
  ]

  constructor() { 
    
  }

  ngOnInit() {

  }

  sendMessage(){

  }

  openAccordion(index : number) {
    if(this.selectedAccordion == index) {
      this.selectedAccordion = -1000;
      //console.log(this.selectedAccordion);
      return;
    }
    this.selectedAccordion = index;
    //console.log(this.selectedAccordion);
  }

  // Used to link the Upload button to the file input button
  performFileInput() {
    $("#fileInput").click();
    //this.loading = true;
  }

  // Used to load a pdf
  fileChangeListener($event) {
    this.loading = true;
    var that = this;

    this.pdf = null;
    this.fileName = null;
    console.log(this.loading);

    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();

    myReader.readAsDataURL(file);
    myReader.onloadend = function (loadEvent: any) {
      that.pdf = loadEvent.target.result;
      console.log(that.pdf);
      that.fileName = file.name;
      console.log(that.fileName);
      that.fileSelected = true;
      that.loading = false;
      console.log(that.loading);
    };      
  }

}

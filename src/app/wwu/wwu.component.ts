import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Resource from './../resource.json';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-wwu',
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
  templateUrl: './wwu.component.html',
  styleUrls: ['./wwu.component.css']
})
export class WwuComponent implements OnInit {

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
    "title" : "Front-end Dev",
    "skills": ["0 - questo è un testo di prova molto lungo per una skill", "1", "2"]
    },
    {
    "title" : "Back-end Dev",
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
    //this.loading = true;
    console.log(this.loading);

    var that = this;

    this.pdf = null;
    this.fileName = null;

    let file: File = $event.target.files[0];
    let myReader: FileReader = new FileReader();

    //this.loading=true;

    myReader.readAsDataURL(file);

    myReader.onload = function(event) {
      console.log("onload: " + new Date());
    };

    myReader.onloadstart = function(event) {
      console.log("onloadstart " + new Date());
    };

    myReader.onprogress = function(event) {
      console.log("onprogress " + new Date());
    };

    myReader.onloadend = function(event) {
      console.log("onloadend " + new Date());
    };

    myReader.onabort = function(event) {
      console.log("onabort " + new Date());
    };

    // myReader.onloadend = function (loadEvent: any) {
    //   that.pdf = loadEvent.target.result;
    //   console.log(that.pdf);
    //   that.fileName = file.name;
    //   console.log(that.fileName);
    //   that.fileSelected = true;
    // };

  }

}

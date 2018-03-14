import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as Resource from './../resource.json';

@Component({
  selector: 'app-page2',
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

  public opportunitiesSample = [
    {
    "title" : "Corso n.1",
    "skills": ["programmer", "p1", "p2"]
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

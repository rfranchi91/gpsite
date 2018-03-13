import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wwu',
  templateUrl: './wwu.component.html',
  styleUrls: ['./wwu.component.css']
})
export class WwuComponent implements OnInit {

  public name: string;
  public email: string;
  public phone: string;

  public fileName: string = null;
  public fileSelected: boolean = false;
  private pdf: string = null;
  

  constructor() { }

  ngOnInit() {

  }

  sendMessage(){

  }

    // Used to link the Upload button to the file input button
    performFileInput() {
      // $("#fileInput").click();
    }
  
    // Used to load a pdf
    fileChangeListener($event) {
      var that = this;

      this.pdf = null;
      this.fileName = null;

      let file: File = $event.target.files[0];
      let myReader: FileReader = new FileReader();

      myReader.readAsDataURL(file);
      myReader.onloadend = function (loadEvent: any) {
        that.pdf = loadEvent.target.result;
        console.log(that.pdf);
        that.fileName = file.name;
        console.log(that.fileName);
        that.fileSelected = true;
      };      
    }

}

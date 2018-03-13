import { Component, OnInit } from '@angular/core';
import * as Resource from './../../resource.json';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public resource: any= Resource;
  
  constructor() { }

  ngOnInit() {
  }

}

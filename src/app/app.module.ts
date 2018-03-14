import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
//import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { PopupComponent } from './page3/popup/popup.component';


import { WwuComponent } from './wwu/wwu.component';

import { FooterComponent } from './extra/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';



const appRoutes: Routes = [
  {path: 'page1', component: Page1Component},
  {path: 'page2', component: Page2Component},
  {path: 'page3', component: Page3Component},

  {path: 'wwu', component: WwuComponent},
  {path: '', redirectTo: '/page1', pathMatch:'full'},
  {path: '**', redirectTo: '/page1', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FooterComponent,
    WwuComponent,
    PopupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDialogModule   
    

  ],
  entryComponents: [PopupComponent],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule {}
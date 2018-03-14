import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ],
  exports: [
      MatButtonModule,
      MatFormFieldModule,
      MatProgressSpinnerModule,
      MatProgressBarModule
    ],
})
export class MaterialModule { }
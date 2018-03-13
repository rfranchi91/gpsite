import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule
    ],
  exports: [
      MatButtonModule,
      MatFormFieldModule
    ],
})
export class MaterialModule { }
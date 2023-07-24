import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from './badges.component';



@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[BadgesComponent]
})
export class BadgesModule { }

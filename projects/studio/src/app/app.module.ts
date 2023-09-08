import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertsModule, BadgesModule} from "gf-library";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatProgressBarModule,
    BadgesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountoModule } from 'angular2-counto';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { numberWithLeadingZero } from '../pipes/leading-zero';
import { numberWithSuffix } from '../pipes/number-suffix';
import { ApiService } from '../services/api.service';
import { PortraitCol } from '../components/portrait-col/portrait-col.component';
import { PortraitRow } from '../components/portrait-row/portrait-row.component';
import { CircleEl } from '../components/circle-el/circle-el.component';
import { Question } from '../components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    PortraitCol,
    PortraitRow,
    CircleEl,
    Question,
    numberWithLeadingZero,
    numberWithSuffix
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule,
    CountoModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

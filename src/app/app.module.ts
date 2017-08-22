import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { numberWithLeadingZero } from '../pipes/leading-zero';
import { PortraitCol } from '../components/portrait-col/portrait-col.component';
import { PortraitRow } from '../components/portrait-row/portrait-row.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePage,
    PortraitCol,
    PortraitRow,
    numberWithLeadingZero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

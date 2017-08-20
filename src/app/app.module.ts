import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { numberWithLeadingZero } from '../pipes/leading-zero';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePage,
    numberWithLeadingZero
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

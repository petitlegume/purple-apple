import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBH0oLSovN7BAK6nN3VjSMVGcjCODyPRqU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

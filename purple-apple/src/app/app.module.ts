import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AgmCoreModule } from 'angular2-google-maps/core';
import 'hammerjs';

import {AppComponent} from './app.component';
import {ConfirmDialog} from "./dialog.component";
import {DialogsService} from "./services/dialog.service";
import {config} from "../config";

@NgModule({
  exports: [
    ConfirmDialog,
  ],
  declarations: [
    AppComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: config.gmapToken
    })
  ],
  providers: [
    DialogsService,
  ],
  entryComponents: [
    ConfirmDialog,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

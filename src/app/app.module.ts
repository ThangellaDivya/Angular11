import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { mainComponent } from './components/main.component';
import {acService} from './components/first.component';
import {secondComponent} from './components/second.component';

@NgModule({
  declarations: [
    AppComponent,
    mainComponent,
    acService,
    secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [mainComponent]
})
export class AppModule { }

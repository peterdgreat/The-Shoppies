import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppiesService } from './service/shoppies.service';
import { ShoppiesComponent } from './shoppies/shoppies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './value-array.pipe';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppiesComponent,
    ValueArrayPipe,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [ShoppiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

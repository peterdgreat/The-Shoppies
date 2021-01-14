import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from'@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppiesService } from './service/shoppies.service';
import { ShoppiesComponent } from './shoppies/shoppies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './value-array.pipe';
import { ResultsComponent } from './results/results.component';
import { NominatingbuttonComponent } from './nominatingbutton/nominatingbutton.component';
import { NominatingresultsComponent } from './nominatingresults/nominatingresults.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppiesComponent,
    ValueArrayPipe,
    ResultsComponent,
    NominatingbuttonComponent,
    NominatingresultsComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule



  ],
  providers: [ShoppiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {MatFormFieldModule} from'@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {ToastrModule,ToastrService} from 'ngx-toastr'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShoppiesService } from './service/shoppies.service';
import { ShoppiesComponent } from './shoppies/shoppies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueArrayPipe } from './value-array.pipe';
import { ResultsComponent } from './results/results.component';
import { NominatingbuttonComponent } from './nominatingbutton/nominatingbutton.component';
import { NominatingresultsComponent } from './nominatingresults/nominatingresults.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppiesComponent,
    ValueArrayPipe,
    ResultsComponent,
    NominatingbuttonComponent,
    NominatingresultsComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
   BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot()


  ],
  providers: [ShoppiesService,ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }

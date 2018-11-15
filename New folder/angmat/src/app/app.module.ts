import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {demo1} from './Demo1/demo1.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormField, MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import {MatInputModule, MatNativeDateModule,MatDatepickerModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Demo2Component } from './demo2/demo2.component';
import { MatCheckboxModule, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';

import { } from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    demo1,
    Demo2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDatepickerModule
    

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormField,
    MatCheckboxModule,
    MatDatepickerModule
    
  ],
  providers: [{provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check'},{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},{provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},{provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
],
  bootstrap: [AppComponent]
})

export class AppModule { }

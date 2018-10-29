import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalTestComponent } from './modal-test/modal-test.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CapitalizePipe } from './capitalize.pipe';
import { LensDirective } from './directives/lens.directive';
import { MinDirective } from './directives/min.directive';
import { MaxDirective } from './directives/max.directive';
import { StepDirective } from './directives/step.directive';
import { InputErrorDirective } from './directives/input-error.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {environment } from "../environments/environment"
@NgModule({
  declarations: [
    AppComponent,
    ModalTestComponent,
    FontSizeComponent,
    FormTestComponent,
    CapitalizePipe,
    LensDirective,
    MinDirective,
    MaxDirective,
    StepDirective,
    InputErrorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [].concat(environment.rootProviders),
  bootstrap: [AppComponent]
})
export class AppModule { }

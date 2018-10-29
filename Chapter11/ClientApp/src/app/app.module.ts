import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModalTestComponent } from './modal-test/modal-test.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { FormTestComponent } from './form-test/form-test.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModalTestComponent,
    FontSizeComponent,
    FormTestComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

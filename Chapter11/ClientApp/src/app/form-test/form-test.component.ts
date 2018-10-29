import { Component, ViewChild} from '@angular/core';
import { SimpleOrder} from '../simple-order'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent  {
  @ViewChild('mainForm') mainForm:NgForm;
  Model = new SimpleOrder();
  errorSubmitted: boolean;
  allSizes = [
    'small',
    'medium',
    'large',
    'x-large',
    'xx-large'
  ];
  constructor() {  }
  onSubmit(): void {
    if (!this.mainForm.form.valid) {
      this.errorSubmitted = true;
      return;
    }
    alert("form succesfully submitted: "
      + JSON.stringify(this.Model));
    this.mainForm.reset();
    this.errorSubmitted = false;
  }
}

import { Component, ViewChild} from '@angular/core';
import { SimpleOrder} from '../simple-order'
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition, keyframes }
  from '@angular/animations';
@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css'],
  animations: [
    trigger('formErrorInOut', [
      state('false', style({ backgroundColor: '*' })),
      state('true', style({ backgroundColor: '#fbf4f3' })),
      transition('false <=> true', [
        animate('1000ms ease-in-out')
      ])
    ]),
    trigger('insertRemove', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }),
        animate('0.5s', keyframes([
          style({
            opacity: 1,
            transform: 'translateY(50%)',
            offset: 0.7
          }),
          style({
            opacity: 1,
            transform: 'translateY(0)',
            offset: 1
          })
        ])),
      ]),
      transition(':leave', [
        animate('0.5s', style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
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

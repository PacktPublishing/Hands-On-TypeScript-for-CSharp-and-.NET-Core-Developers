import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators }
  from '@angular/forms'

@Directive({
  selector: '[max]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaxDirective,
    multi: true
  }]
})
export class MaxDirective implements Validator {
  @Input('max') maxValue: number;
  validate(control: AbstractControl): { [key: string]: any } {
    return Validators.max(this.maxValue)(control)
  }
}

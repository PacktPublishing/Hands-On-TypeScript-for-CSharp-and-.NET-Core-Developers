import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl }
  from '@angular/forms'

@Directive({
  selector: '[step]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: StepDirective,
    multi: true
  }]
})
export class StepDirective implements Validator {
  @Input('step') stepValue: number;
  validate(control: AbstractControl): { [key: string]: any } {
    if (!control.value) return null
    let nVal = parseFloat(control.value);
    if (!nVal) return null
    if(nVal%this.stepValue)
      return { 'step': true }
    return null;
  }
}

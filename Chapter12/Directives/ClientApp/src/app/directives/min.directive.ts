import { Directive, Input} from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, Validators }
  from '@angular/forms'

@Directive({
  selector: '[min]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinDirective,
    multi: true
  }]
})
export class MinDirective implements Validator {
  @Input('min') minValue: number;
  validate(control: AbstractControl): { [key: string]: any } {
    return Validators.min(this.minValue)(control)
  }
}

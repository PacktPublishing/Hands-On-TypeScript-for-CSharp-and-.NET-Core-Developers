import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
@Directive({
  selector: '[inputError]'
})
export class InputErrorDirective {
  private static readonly allErrors =
    {
      required: 'the field is required',
      minlength: 'minimum number of characters exceeded',
      maxlength: 'maximum number of characters exceeded',
      max: 'maximum value exceeded',
      min: 'minimum value exceeded',
      step: 'value is not a multiple of the step'
    };
  @Input('inputErrorFrom') set errors(value: { [key: string]: any }) {
    let newError = null;
    for (let x in value) {
      if (value[x]) {
        newError = x;
        break;
      }
    }
    if (this.previousError != newError) {
      this.previousError = newError;
      this.context.$implicit =
        InputErrorDirective.allErrors[newError];
      this.viewContainer.clear();
      if (newError) this.viewContainer.createEmbeddedView(
        this.template, this.context);
    }
  }
  private context = {
    $implicit: null
  };
  private previousError: string=null;
  
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}

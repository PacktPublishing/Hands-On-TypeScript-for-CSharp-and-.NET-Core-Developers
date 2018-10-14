import { Directive, Input, TemplateRef, ViewContainerRef, Inject } from '@angular/core';
import { INPUT_ERROR_MESSAGES} from "../app-tokens"
@Directive({
  selector: '[inputError]'
})
export class InputErrorDirective {
  
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
        this.allErrors[newError];
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
    private viewContainer: ViewContainerRef,
    @Inject(INPUT_ERROR_MESSAGES) private allErrors:
      { [key: string]: string })
   { }

}

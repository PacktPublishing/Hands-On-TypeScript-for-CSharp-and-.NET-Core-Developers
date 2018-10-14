import { Directive, HostListener, Input, ElementRef }
  from '@angular/core';
@Directive({
  selector: '[lens]'
})
export class LensDirective {
  @Input("lens") Magnification: number;
  @HostListener('click', ['$event.target'])
    onClick(el: HTMLElement) {
    if (el.style.fontSize) el.style.fontSize = null;
    else el.style.fontSize = this.Magnification+"%"
  }
  constructor(private el: ElementRef) { }
}

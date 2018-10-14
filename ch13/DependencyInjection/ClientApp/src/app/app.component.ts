import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';
  @ViewChild("MainHeader") header: ElementRef
  doAlert(x): void {
    alert(x);
  }
  get HeaderFontSize(): number {
    return parseFloat(window
      .getComputedStyle(this.header.nativeElement, null)
      .getPropertyValue('font-size'));
  }
  set HeaderFontSize(x: number) {
    this.header.nativeElement.style.fontSize
      = x + "px";
  }
}

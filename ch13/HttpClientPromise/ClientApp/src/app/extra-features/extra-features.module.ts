import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponentComponent],
  exports: [TestComponentComponent]
})
export class ExtraFeaturesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'test', component: TestComponentComponent },
    ])
  ],
  declarations: [TestComponentComponent],
  exports: [/*TestComponentComponent*/]
})
export class ExtraFeaturesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent }
  from './test-component/test-component.component';
import { RouterModule } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
    {
      path: '', component: TestComponentComponent,
      children: [
        { path: 'child1', component: Child1Component },
        { path: 'child2', component: Child2Component },
        { path: '', redirectTo: 'child1', pathMatch: 'full' },
        { path: 'add', component: Child3Component, outlet: 'extra' },
        { path: 'remove', component: null, outlet: 'extra', children: [] }
      ]
    },
    ])
  ],
  declarations: [TestComponentComponent, Child1Component, Child2Component, Child3Component],
  exports: [/*TestComponentComponent*/]
})
export class ExtraFeaturesModule { }

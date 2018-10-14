import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public testInput = 0;
  constructor(private router: Router,
    private route: ActivatedRoute) {
    route.paramMap.subscribe(params => {
      this.currentCount = params.has('init') ?
          parseInt(params.get('init')) : 0;
    })  
  }
  public incrementCounter(evt: any) {
    this.currentCount++;
  }
}

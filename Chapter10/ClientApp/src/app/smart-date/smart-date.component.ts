import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart-date',
  template:'<span>{{roughDate|date}}</span>',
  styles: ['span {color: red ;}']
})
export class SmartDateComponent implements OnInit {

  constructor() { }
  @Input('date') roughDate: Date;

  ngOnInit() {
  }

}

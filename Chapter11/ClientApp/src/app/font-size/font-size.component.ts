import { Component, Input, Output, EventEmitter }
  from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent{
  constructor() { }
  private _Size: number;
  @Input() set Size(x: number) {
    var changed = this._Size != x;
    this._Size = x;
    if (changed) this.SizeChange.emit(x);
  }
  get Size(): number {
    return this._Size;
  }
  @Output() SizeChange =
    new EventEmitter<number>();
}

import {
  Component, OnDestroy, AfterViewInit,
  Input, ViewChild, ElementRef, Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html'
})
export class ModalTestComponent
    implements OnDestroy, AfterViewInit {
  constructor() { }
  @ViewChild('modalRoot') root: ElementRef;
  @Input() Title: string;
  @Output() ModalClosed =
    new EventEmitter<ModalTestComponent>();
  Open() {
    $(this.root.nativeElement).modal("show");
  }
  Close() {
    $(this.root.nativeElement).modal("hide");
  }
  ngAfterViewInit() {
    $(this.root.nativeElement)
      .addClass("modal fade")
      .modal({
        show: false,
        backdrop: "static"
      })
      .on('hidden.bs.modal', e => {
        this.ModalClosed.emit(this);
      });
  }
  ngOnDestroy() {
    $(this.root.nativeElement)
      .off('hidden.bs.modal')
      .modal("dispose");
  }
}

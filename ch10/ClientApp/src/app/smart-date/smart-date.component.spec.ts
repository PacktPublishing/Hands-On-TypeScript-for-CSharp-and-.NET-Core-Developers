import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartDateComponent } from './smart-date.component';

describe('SmartDateComponent', () => {
  let component: SmartDateComponent;
  let fixture: ComponentFixture<SmartDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child3Component } from './child3.component';

describe('Child3Component', () => {
  let component: Child3Component;
  let fixture: ComponentFixture<Child3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

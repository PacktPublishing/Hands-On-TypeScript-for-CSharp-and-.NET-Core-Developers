import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeComponent } from './font-size.component';

describe('FontSizeComponent', () => {
  let component: FontSizeComponent;
  let fixture: ComponentFixture<FontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

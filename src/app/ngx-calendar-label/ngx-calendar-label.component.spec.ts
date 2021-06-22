import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalendarLabelComponent } from './ngx-calendar-label.component';

describe('NgxCalendarLabelComponent', () => {
  let component: NgxCalendarLabelComponent;
  let fixture: ComponentFixture<NgxCalendarLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCalendarLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalendarLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

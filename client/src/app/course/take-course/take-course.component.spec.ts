import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeCourseComponent } from './take-course.component';

describe('TakeCourseComponent', () => {
  let component: TakeCourseComponent;
  let fixture: ComponentFixture<TakeCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

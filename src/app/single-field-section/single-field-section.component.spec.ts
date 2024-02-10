import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFieldSectionComponent } from './single-field-section.component';

describe('SingleFieldSectionComponent', () => {
  let component: SingleFieldSectionComponent;
  let fixture: ComponentFixture<SingleFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

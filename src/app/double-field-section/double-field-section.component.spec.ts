import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFieldSectionComponent } from './double-field-section.component';

describe('DoubleFieldSectionComponent', () => {
  let component: DoubleFieldSectionComponent;
  let fixture: ComponentFixture<DoubleFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

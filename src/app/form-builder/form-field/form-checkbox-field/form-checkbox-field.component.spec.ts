import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckboxFieldComponent } from './form-checkbox-field.component';

describe('FormCheckboxFieldComponent', () => {
  let component: FormCheckboxFieldComponent;
  let fixture: ComponentFixture<FormCheckboxFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCheckboxFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

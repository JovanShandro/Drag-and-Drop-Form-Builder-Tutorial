import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSeparatorFieldComponent } from './form-separator-field.component';

describe('FormSeparatorFieldComponent', () => {
  let component: FormSeparatorFieldComponent;
  let fixture: ComponentFixture<FormSeparatorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSeparatorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSeparatorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

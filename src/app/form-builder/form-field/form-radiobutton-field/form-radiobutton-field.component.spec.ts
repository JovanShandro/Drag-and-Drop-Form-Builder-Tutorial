import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadiobuttonFieldComponent } from './form-radiobutton-field.component';

describe('FormRadiobuttonFieldComponent', () => {
  let component: FormRadiobuttonFieldComponent;
  let fixture: ComponentFixture<FormRadiobuttonFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRadiobuttonFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadiobuttonFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

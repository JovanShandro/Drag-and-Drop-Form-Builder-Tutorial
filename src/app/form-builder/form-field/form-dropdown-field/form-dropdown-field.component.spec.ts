import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDropdownFieldComponent } from './form-dropdown-field.component';

describe('FormDropdownFieldComponent', () => {
  let component: FormDropdownFieldComponent;
  let fixture: ComponentFixture<FormDropdownFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDropdownFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDropdownFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

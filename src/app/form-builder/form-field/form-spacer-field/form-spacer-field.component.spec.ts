import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSpacerFieldComponent } from './form-spacer-field.component';

describe('FormSpacerFieldComponent', () => {
  let component: FormSpacerFieldComponent;
  let fixture: ComponentFixture<FormSpacerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSpacerFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSpacerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPictureFieldComponent } from './form-picture-field.component';

describe('FormPictureFieldComponent', () => {
  let component: FormPictureFieldComponent;
  let fixture: ComponentFixture<FormPictureFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPictureFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPictureFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

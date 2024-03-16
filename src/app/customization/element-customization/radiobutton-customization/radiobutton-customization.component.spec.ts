import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobuttonCustomizationComponent } from './radiobutton-customization.component';

describe('RadiobuttonCustomizationComponent', () => {
  let component: RadiobuttonCustomizationComponent;
  let fixture: ComponentFixture<RadiobuttonCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiobuttonCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobuttonCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

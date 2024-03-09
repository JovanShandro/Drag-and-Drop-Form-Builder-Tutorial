import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxCustomizationComponent } from './checkbox-customization.component';

describe('CheckboxCustomizationComponent', () => {
  let component: CheckboxCustomizationComponent;
  let fixture: ComponentFixture<CheckboxCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

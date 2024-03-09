import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCustomizationComponent } from './input-customization.component';

describe('InputCustomizationComponent', () => {
  let component: InputCustomizationComponent;
  let fixture: ComponentFixture<InputCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

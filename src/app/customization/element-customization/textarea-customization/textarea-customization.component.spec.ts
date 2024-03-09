import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaCustomizationComponent } from './textarea-customization.component';

describe('TextareaCustomizationComponent', () => {
  let component: TextareaCustomizationComponent;
  let fixture: ComponentFixture<TextareaCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextareaCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

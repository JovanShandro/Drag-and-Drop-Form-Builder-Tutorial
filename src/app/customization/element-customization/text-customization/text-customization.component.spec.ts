import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCustomizationComponent } from './text-customization.component';

describe('TextCustomizationComponent', () => {
  let component: TextCustomizationComponent;
  let fixture: ComponentFixture<TextCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

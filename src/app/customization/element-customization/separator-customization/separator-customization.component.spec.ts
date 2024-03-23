import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorCustomizationComponent } from './separator-customization.component';

describe('SeparatorCustomizationComponent', () => {
  let component: SeparatorCustomizationComponent;
  let fixture: ComponentFixture<SeparatorCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

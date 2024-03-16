import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCustomizationComponent } from './dropdown-customization.component';

describe('DropdownCustomizationComponent', () => {
  let component: DropdownCustomizationComponent;
  let fixture: ComponentFixture<DropdownCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

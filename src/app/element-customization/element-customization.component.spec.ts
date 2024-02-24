import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCustomizationComponent } from './element-customization.component';

describe('ElementCustomizationComponent', () => {
  let component: ElementCustomizationComponent;
  let fixture: ComponentFixture<ElementCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

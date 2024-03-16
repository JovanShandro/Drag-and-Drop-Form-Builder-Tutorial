import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureCustomizationComponent } from './picture-customization.component';

describe('PictureCustomizationComponent', () => {
  let component: PictureCustomizationComponent;
  let fixture: ComponentFixture<PictureCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

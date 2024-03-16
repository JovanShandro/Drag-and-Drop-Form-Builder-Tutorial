import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerCustomizationComponent } from './spacer-customization.component';

describe('SpacerCustomizationComponent', () => {
  let component: SpacerCustomizationComponent;
  let fixture: ComponentFixture<SpacerCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacerCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacerCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

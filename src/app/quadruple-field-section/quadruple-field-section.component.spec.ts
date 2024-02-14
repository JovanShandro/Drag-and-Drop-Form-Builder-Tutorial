import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadrupleFieldSectionComponent } from './quadruple-field-section.component';

describe('QuadrupleFieldSectionComponent', () => {
  let component: QuadrupleFieldSectionComponent;
  let fixture: ComponentFixture<QuadrupleFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadrupleFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadrupleFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

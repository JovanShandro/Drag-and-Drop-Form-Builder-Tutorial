import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToTwoFieldSectionComponent } from './one-to-two-field-section.component';

describe('OneToTwoFieldSectionComponent', () => {
  let component: OneToTwoFieldSectionComponent;
  let fixture: ComponentFixture<OneToTwoFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneToTwoFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToTwoFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

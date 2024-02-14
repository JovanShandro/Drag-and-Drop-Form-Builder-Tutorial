import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleFieldSectionComponent } from './triple-field-section.component';

describe('TripleFieldSectionComponent', () => {
  let component: TripleFieldSectionComponent;
  let fixture: ComponentFixture<TripleFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripleFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

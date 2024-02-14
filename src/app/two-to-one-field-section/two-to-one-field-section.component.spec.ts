import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoToOneFieldSectionComponent } from './two-to-one-field-section.component';

describe('TwoToOneFieldSectionComponent', () => {
  let component: TwoToOneFieldSectionComponent;
  let fixture: ComponentFixture<TwoToOneFieldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoToOneFieldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoToOneFieldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

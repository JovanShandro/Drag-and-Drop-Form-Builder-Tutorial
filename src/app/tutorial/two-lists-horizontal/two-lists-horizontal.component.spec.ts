import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoListsHorizontalComponent } from './two-lists-horizontal.component';

describe('TwoListsHorizontalComponent', () => {
  let component: TwoListsHorizontalComponent;
  let fixture: ComponentFixture<TwoListsHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoListsHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoListsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

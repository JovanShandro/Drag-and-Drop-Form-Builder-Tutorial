import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableSectionListComponent } from './draggable-section-list.component';

describe('DraggableSectionListComponent', () => {
  let component: DraggableSectionListComponent;
  let fixture: ComponentFixture<DraggableSectionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableSectionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

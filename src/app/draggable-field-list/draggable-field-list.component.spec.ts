import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableFieldListComponent } from './draggable-field-list.component';

describe('DraggableFieldListComponent', () => {
  let component: DraggableFieldListComponent;
  let fixture: ComponentFixture<DraggableFieldListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DraggableFieldListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableFieldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementListPanelComponent } from './element-list-panel.component';

describe('ElementListPanelComponent', () => {
  let component: ElementListPanelComponent;
  let fixture: ComponentFixture<ElementListPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementListPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementListPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

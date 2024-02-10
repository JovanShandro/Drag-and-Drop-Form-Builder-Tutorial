import { Component } from '@angular/core';
import { FormSectionType } from '../form.service';

@Component({
  selector: 'app-element-list-panel',
  templateUrl: './element-list-panel.component.html',
  styleUrls: ['./element-list-panel.component.scss'],
})
export class ElementListPanelComponent {
  draggableSections = [
    {
      sectionType: FormSectionType.OneFieldPerRow,
      pattern: '1',
    },
    {
      sectionType: FormSectionType.TwoFieldsPerRow,
      pattern: '1:1',
    },
    {
      sectionType: FormSectionType.ThreeFieldsPerRow,
      pattern: '1:1:1',
    },
    {
      sectionType: FormSectionType.FourFieldsPerRow,
      pattern: '1:1:1:1',
    },
    {
      sectionType: FormSectionType.OneToTwoPerRow,
      pattern: '1:2',
    },
    {
      sectionType: FormSectionType.TwoToOnePerRow,
      pattern: '2:1',
    },
  ];
}

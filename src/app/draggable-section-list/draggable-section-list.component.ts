import { Component } from '@angular/core';
import { FormItemType, FormSectionType } from '../form.service';

@Component({
  selector: 'app-draggable-section-list',
  templateUrl: './draggable-section-list.component.html',
  styleUrls: ['./draggable-section-list.component.scss'],
})
export class DraggableSectionListComponent {
  draggableSections = [
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.OneFieldPerRow,
      pattern: '1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.TwoFieldsPerRow,
      pattern: '1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.ThreeFieldsPerRow,
      pattern: '1:1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.FourFieldsPerRow,
      pattern: '1:1:1:1',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.OneToTwoPerRow,
      pattern: '1:2',
    },
    {
      type: FormItemType.Section,
      sectionType: FormSectionType.TwoToOnePerRow,
      pattern: '2:1',
    },
  ];

  noEnterPredicate() {
    // The way how predicates work is that if this function
    // returns true, the item will be allows to be dropped in the list,
    // and if it returns false, it won't
    return false;
  }
}

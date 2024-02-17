import { Component } from '@angular/core';
import { FormFieldType, FormItemType, FormSectionType, FormService } from '../form.service';
import { faSquare as faSquareOutline } from '@fortawesome/free-regular-svg-icons';
import {
  faSquare as faSquareFilled,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-element-list-panel',
  templateUrl: './element-list-panel.component.html',
  styleUrls: ['./element-list-panel.component.scss'],
})
export class ElementListPanelComponent {
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

  draggableFields = [
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Input,
      title: 'Input',
      icon: faSquareOutline,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Button,
      title: 'Button',
      icon: faSquareFilled,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Textarea,
      title: 'Textarea',
      icon: faWindowMaximize,
    },
  ];

  constructor(private formService: FormService) {}

  get allFieldIds() {
    const fieldIds: string[] = [];

    this.formService.sections.forEach((section) => {
      section.fields.forEach((field) => {
        fieldIds.push(field.id);
      });
    });

    return fieldIds;
  }

  noEnterPredicate() {
    // The way how predicates work is that if this function
    // returns true, the item will be allows to be dropped in the list,
    // and if it returns false, it won't
    return false;
  }
}

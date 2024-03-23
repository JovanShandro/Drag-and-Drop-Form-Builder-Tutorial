import { Component } from '@angular/core';
import {
  faSquare as faSquareOutline,
  faCheckSquare,
  faSquareCaretDown,
  faImage,
} from '@fortawesome/free-regular-svg-icons';
import {
  faArrows,
  faArrowsAltV,
  faGripLines,
  faLanguage,
  faList,
  faSquare as faSquareFilled,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import {
  FormFieldType,
  FormItemType,
  FormService,
} from '../../services/form.service';

@Component({
  selector: 'app-draggable-field-list',
  templateUrl: './draggable-field-list.component.html',
  styleUrls: ['./draggable-field-list.component.scss'],
})
export class DraggableFieldListComponent {
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
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Checkbox,
      title: 'Checkbox',
      icon: faCheckSquare,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Text,
      title: 'Text',
      icon: faLanguage,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Dropdown,
      title: 'Dropdown',
      icon: faSquareCaretDown,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.RadioButton,
      title: 'Radio',
      icon: faList,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Picture,
      title: 'Picture',
      icon: faImage,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Spacer,
      title: 'Spacer',
      icon: faArrowsAltV,
    },
    {
      type: FormItemType.Field,
      fieldType: FormFieldType.Separator,
      title: 'Separator',
      icon: faGripLines,
    }
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

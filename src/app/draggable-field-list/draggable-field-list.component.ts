import { Component } from '@angular/core';
import { FormFieldType, FormItemType, FormService } from '../form.service';
import { faSquare as faSquareOutline } from '@fortawesome/free-regular-svg-icons';
import {
  faSquare as faSquareFilled,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

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

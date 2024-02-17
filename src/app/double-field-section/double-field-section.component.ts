import { Component, Input } from '@angular/core';
import {
  FormField,
  FormFieldType,
  FormItemType,
  FormSection,
} from '../form.service';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-double-field-section',
  templateUrl: './double-field-section.component.html',
  styleUrls: ['./double-field-section.component.scss'],
})
export class DoubleFieldSectionComponent {
  @Input() fields?: FormField[];

  formFieldType = FormFieldType;

  onlyFieldsPredicate(item: CdkDrag<FormSection | FormField>) {
    return item.data.type === FormItemType.Field;
  }

  onDrop(event: CdkDragDrop<FormField>, currentField: FormField) {
    if (event.item.data.fieldType) {
      currentField.fieldType = event.item.data.fieldType;
    }
  }
}

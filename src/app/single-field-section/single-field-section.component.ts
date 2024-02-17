import { Component, Input } from '@angular/core';
import {
  FormField,
  FormFieldType,
  FormItemType,
  FormSection,
} from '../form.service';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single-field-section',
  templateUrl: './single-field-section.component.html',
  styleUrls: ['./single-field-section.component.scss'],
})
export class SingleFieldSectionComponent {
  @Input() field!: FormField;

  formFieldType = FormFieldType;

  onlyFieldsPredicate(item: CdkDrag<FormSection | FormField>) {
    return item.data.type === FormItemType.Field;
  }

  onDrop(event: CdkDragDrop<FormField>) {
    if (event.item.data.fieldType) {
      this.field.fieldType = event.item.data.fieldType;
    }
  }
}

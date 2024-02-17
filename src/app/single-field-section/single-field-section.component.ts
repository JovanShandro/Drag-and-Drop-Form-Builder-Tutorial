import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-single-field-section',
  templateUrl: './single-field-section.component.html',
  styleUrls: ['./single-field-section.component.scss'],
})
export class SingleFieldSectionComponent {
  @Input() field!: FormField;

  formFieldType = FormFieldType;

  onDrop(event: CdkDragDrop<FormField>) {
    if (event.item.data.fieldType) {
      this.field.fieldType = event.item.data.fieldType;
    }
  }
}

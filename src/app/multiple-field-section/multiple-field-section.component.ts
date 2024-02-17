import { Component, Input } from '@angular/core';
import {
  FormField,
  FormFieldType,
  FormItemType,
  FormSection,
} from '../form.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-multiple-field-section',
  templateUrl: './multiple-field-section.component.html',
  styleUrls: ['./multiple-field-section.component.scss'],
})
export class MultipleFieldSectionComponent {
  @Input() fields!: FormField[];

  formFieldType = FormFieldType;
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;

  onlyFieldsPredicate(item: CdkDrag<FormSection | FormField>) {
    return item.data.type === FormItemType.Field;
  }

  noEnterPredicate() {
    return false;
  }

  onDrop(event: CdkDragDrop<FormField>, currentField: FormField) {
    if (event.item.data.fieldType) {
      currentField.fieldType = event.item.data.fieldType;
    }
  }

  onReorderFields(event: CdkDragDrop<FormField>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }
}

import { Component, Input } from '@angular/core';
import {
  FormField,
  FormFieldType,
  FormItemType,
  FormSection,
  FormSectionType,
  FormService,
} from '../form.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-multiple-field-section',
  templateUrl: './multiple-field-section.component.html',
  styleUrls: ['./multiple-field-section.component.scss'],
})
export class MultipleFieldSectionComponent {
  @Input() section!: FormSection;

  formFieldType = FormFieldType;
  formSectionType = FormSectionType;
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;

  selectedField$: Observable<FormField | null> = of(null);

  constructor(private formService: FormService) {
    this.selectedField$ = this.formService.selectedField$;
  }

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
    moveItemInArray(
      this.section.fields,
      event.previousIndex,
      event.currentIndex
    );
  }
}

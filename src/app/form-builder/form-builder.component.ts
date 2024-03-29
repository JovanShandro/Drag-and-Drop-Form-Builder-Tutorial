import { Component, OnInit } from '@angular/core';
import { FormField, FormItemType, FormSection, FormService } from '../services/form.service';
import { CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent implements OnInit {
  faArrowsUpDownLeftRight = faArrowsUpDownLeftRight;
  sections: FormSection[] = [];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.sections = this.formService.sections;
  }

  onlySectionsPredicate(item: CdkDrag<FormSection | FormField>) {
    return item.data.type === FormItemType.Section;
  }

  onSectionDrop(event: CdkDragDrop<FormSection>) {
    if (event.container !== event.previousContainer) {
      // Handle creation of new section
      this.formService.createSection(
        event.item.data.sectionType,
        event.currentIndex
      );
      return;
    }

    // Reorder in the list
    moveItemInArray(
      this.formService.sections,
      event.previousIndex,
      event.currentIndex
    );
  }
}

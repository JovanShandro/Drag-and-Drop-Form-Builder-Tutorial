import { Component, OnInit } from '@angular/core';
import { FormSection, FormService } from '../form.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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

  onSectionDrop(event: CdkDragDrop<FormSection>) {
    if (event.container !== event.previousContainer) {
      // Handle creation of new section
      this.formService.createSection(event.item.data.sectionType, event.currentIndex)
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

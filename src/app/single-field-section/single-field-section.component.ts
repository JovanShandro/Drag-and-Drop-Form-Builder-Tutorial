import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-single-field-section',
  templateUrl: './single-field-section.component.html',
  styleUrls: ['./single-field-section.component.scss'],
})
export class SingleFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-double-field-section',
  templateUrl: './double-field-section.component.html',
  styleUrls: ['./double-field-section.component.scss']
})
export class DoubleFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

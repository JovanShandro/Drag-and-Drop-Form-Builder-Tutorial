import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-one-to-two-field-section',
  templateUrl: './one-to-two-field-section.component.html',
  styleUrls: ['./one-to-two-field-section.component.scss']
})
export class OneToTwoFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

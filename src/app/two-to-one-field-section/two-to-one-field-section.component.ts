import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';
@Component({
  selector: 'app-two-to-one-field-section',
  templateUrl: './two-to-one-field-section.component.html',
  styleUrls: ['./two-to-one-field-section.component.scss']
})
export class TwoToOneFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

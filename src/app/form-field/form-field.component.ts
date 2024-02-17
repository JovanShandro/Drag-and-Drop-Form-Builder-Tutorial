import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() field!: FormField;

  formFieldType = FormFieldType;
}

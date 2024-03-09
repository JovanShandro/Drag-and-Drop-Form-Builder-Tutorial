import { Component, Input } from '@angular/core';
import { CheckboxSettings } from '../../../services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-checkbox-field',
  templateUrl: './form-checkbox-field.component.html',
  styleUrls: ['./form-checkbox-field.component.scss'],
})
export class FormCheckboxFieldComponent {
  @Input() settings!: CheckboxSettings;

  checkboxId = uuid();
}

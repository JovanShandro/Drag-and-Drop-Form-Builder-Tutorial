import { Component, Input } from '@angular/core';
import { InputSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss'],
})
export class FormInputFieldComponent {
  @Input() settings!: InputSettings;

  inputId = uuid();
}

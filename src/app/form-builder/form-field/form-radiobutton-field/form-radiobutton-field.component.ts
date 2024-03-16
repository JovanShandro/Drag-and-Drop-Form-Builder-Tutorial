import { Component, Input } from '@angular/core';
import { RadioButtonSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-radiobutton-field',
  templateUrl: './form-radiobutton-field.component.html',
  styleUrls: ['./form-radiobutton-field.component.scss']
})
export class FormRadiobuttonFieldComponent {
  @Input() settings!: RadioButtonSettings;

  radioButtonId = uuid();

}

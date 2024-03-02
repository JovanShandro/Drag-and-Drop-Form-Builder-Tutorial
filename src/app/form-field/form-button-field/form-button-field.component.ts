import { Component, Input } from '@angular/core';
import { ButtonSettings } from '../../form.service';

@Component({
  selector: 'app-form-button-field',
  templateUrl: './form-button-field.component.html',
  styleUrls: ['./form-button-field.component.scss'],
})
export class FormButtonFieldComponent {
  @Input() settings!: ButtonSettings;
}

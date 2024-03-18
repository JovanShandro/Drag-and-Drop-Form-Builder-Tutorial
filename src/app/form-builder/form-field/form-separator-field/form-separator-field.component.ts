import { Component, Input } from '@angular/core';
import { SeparatorLineSettings } from '../../../services/form.service';

@Component({
  selector: 'app-form-separator-field',
  templateUrl: './form-separator-field.component.html',
  styleUrls: ['./form-separator-field.component.scss'],
})
export class FormSeparatorFieldComponent {
  @Input() settings!: SeparatorLineSettings;
}

import { Component, Input } from '@angular/core';
import { SpacerSettings } from '../../../services/form.service';

@Component({
  selector: 'app-form-spacer-field',
  templateUrl: './form-spacer-field.component.html',
  styleUrls: ['./form-spacer-field.component.scss'],
})
export class FormSpacerFieldComponent {
  @Input() settings!: SpacerSettings;
}

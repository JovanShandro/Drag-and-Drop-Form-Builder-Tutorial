import { Component, Input } from '@angular/core';
import {
  Alignment,
  ButtonSettings,
  ButtonStyle,
  ButtonWidth,
} from '../../form.service';

@Component({
  selector: 'app-form-button-field',
  templateUrl: './form-button-field.component.html',
  styleUrls: ['./form-button-field.component.scss'],
})
export class FormButtonFieldComponent {
  @Input() settings!: ButtonSettings;

  ButtonStyle = ButtonStyle;
  ButtonWidth = ButtonWidth;
  Alignment = Alignment;
}

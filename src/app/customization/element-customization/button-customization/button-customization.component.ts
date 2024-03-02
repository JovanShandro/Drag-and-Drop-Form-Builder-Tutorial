import { Component, Input } from '@angular/core';
import {
  Alignment,
  ButtonSettings,
  ButtonStyle,
  ButtonType,
  Font,
  TextAlignment,
} from '../../../form.service';

@Component({
  selector: 'app-button-customization',
  templateUrl: './button-customization.component.html',
  styleUrls: ['./button-customization.component.scss'],
})
export class ButtonCustomizationComponent {
  @Input() settings!: ButtonSettings;

  buttonStyles = Object.keys(ButtonStyle);
  alignments = Object.keys(Alignment);
  textAlignment = Object.keys(TextAlignment);
  fonts = Object.keys(Font);
  buttonTypes = Object.keys(ButtonType);
}

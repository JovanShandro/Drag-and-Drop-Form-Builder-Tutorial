import { Component, Input } from '@angular/core';
import {
  Alignment,
  ButtonSettings,
  ButtonStyle,
  ButtonType,
  ButtonWidth,
  Font,
  TextAlignment,
} from '../../../services/form.service';

@Component({
  selector: 'app-button-customization',
  templateUrl: './button-customization.component.html',
  styleUrls: ['./button-customization.component.scss'],
})
export class ButtonCustomizationComponent {
  @Input() settings!: ButtonSettings;

  ButtonWidth = ButtonWidth;

  textAlignment = Object.keys(TextAlignment);
  fonts = Object.keys(Font);

  buttonTypes = [
    {
      label: 'Button',
      value: ButtonType.Button,
    },
    {
      label: 'Submit',
      value: ButtonType.Submit,
    },
  ];

  buttonStyles = [
    {
      label: 'Flat',
      value: ButtonStyle.Flat,
    },
    {
      label: 'Raised',
      value: ButtonStyle.Raised,
    },
    {
      label: 'Stroked',
      value: ButtonStyle.Stroked,
    },
  ];

  buttonWidthValues = [
    {
      label: 'Auto',
      value: ButtonWidth.Auto,
    },
    {
      label: 'Full width',
      value: ButtonWidth.FullWidth,
    },
    {
      label: 'Fixed size',
      value: ButtonWidth.FixedSize,
    },
  ];


  alignments = [
    {
      label: 'Left',
      value: Alignment.Left,
    },
    {
      label: 'Center',
      value: Alignment.Center,
    },
    {
      label: 'Right',
      value: Alignment.Right,
    },
  ];
}

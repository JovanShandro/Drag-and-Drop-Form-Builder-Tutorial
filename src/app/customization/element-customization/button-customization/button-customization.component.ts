import { Component, Input } from '@angular/core';
import {
  Alignment,
  ButtonSettings,
  ButtonStyle,
  ButtonType,
  ButtonWidth,
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

  ButtonWidth = ButtonWidth;

  textAlignment = [
    {
      label: 'Start',
      value: TextAlignment.Start,
    },
    {
      label: 'Center',
      value: TextAlignment.Center,
    },
    {
      label: 'End',
      value: TextAlignment.End,
    },
    {
      label: 'Justify',
      value: TextAlignment.Justify,
    }
  ]

  fonts = [
    {
      label: 'Arial',
      value: Font.Arial,
    },
    {
      label: 'Comic Sans MS',
      value: Font.ComicSansMS,
    },
    {
      label: 'Courier New',
      value: Font.CourierNew,
    },
    {
      label: 'Georgia',
      value: Font.Georgia,
    },
    {
      label: 'Lucida Console',
      value: Font.LucidaConsole,
    },
    {
      label: 'Tahoma',
      value: Font.Tahoma,
    },
    {
      label: 'Times New Roman',
      value: Font.TimesNewRoman,
    },
    {
      label: 'Trebuchet MS',
      value: Font.TrebuchetMS,
    },
    {
      label: 'Verdana',
      value: Font.Verdana,
    },
  ];

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

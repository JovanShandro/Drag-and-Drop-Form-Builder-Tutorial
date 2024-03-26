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
  styleUrls: [],
})
export class ButtonCustomizationComponent {
  @Input() settings!: ButtonSettings;

  ButtonWidth = ButtonWidth;

  textAlignment = [
    {
      label: 'TextAlignment.Start',
      value: TextAlignment.Start,
    },
    {
      label: 'TextAlignment.Center',
      value: TextAlignment.Center,
    },
    {
      label: 'TextAlignment.End',
      value: TextAlignment.End,
    },
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
      label: 'ButtonCustomization.ButtonType.Button',
      value: ButtonType.Button,
    },
    {
      label: 'ButtonCustomization.ButtonType.Submit',
      value: ButtonType.Submit,
    },
  ];

  buttonStyles = [
    {
      label: 'ButtonCustomization.ButtonStyle.Flat',
      value: ButtonStyle.Flat,
    },
    {
      label: 'ButtonCustomization.ButtonStyle.Raised',
      value: ButtonStyle.Raised,
    },
    {
      label: 'ButtonCustomization.ButtonStyle.Stroked',
      value: ButtonStyle.Stroked,
    },
  ];

  buttonWidthValues = [
    {
      label: 'ButtonCustomization.ButtonWidth.Auto',
      value: ButtonWidth.Auto,
    },
    {
      label: 'ButtonCustomization.ButtonWidth.FullWidth',
      value: ButtonWidth.FullWidth,
    },
    {
      label: 'ButtonCustomization.ButtonWidth.FixedSize',
      value: ButtonWidth.FixedSize,
    },
  ];


  alignments = [
    {
      label: 'Alignment.Left',
      value: Alignment.Left,
    },
    {
      label: 'Alignment.Center',
      value: Alignment.Center,
    },
    {
      label: 'Alignment.Right',
      value: Alignment.Right,
    },
  ];
}

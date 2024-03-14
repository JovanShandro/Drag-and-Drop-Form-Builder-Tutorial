import { Component, Input } from '@angular/core';
import { Font, TextSettings } from 'src/app/services/form.service';

@Component({
  selector: 'app-text-customization',
  templateUrl: './text-customization.component.html',
  styleUrls: ['./text-customization.component.scss']
})
export class TextCustomizationComponent {
  @Input () settings!: TextSettings;

  fonts = [
    {
      label: 'Arial',
      value: Font.Arial
    },
    {
      label: 'Times New Roman',
      value: Font.TimesNewRoman
    },
    {
      label: 'Courier New',
      value: Font.CourierNew
    },
    {
      label: 'Verdana',
      value: Font.Verdana
    },
    {
      label: 'Georgia',
      value: Font.Georgia
    }
  ];
  

}

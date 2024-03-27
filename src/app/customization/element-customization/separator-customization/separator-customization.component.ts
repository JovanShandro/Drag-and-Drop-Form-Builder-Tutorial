import { Component, Input } from '@angular/core';
import { LineStyle, SeparatorSettings } from 'src/app/services/form.service';

@Component({
  selector: 'app-separator-customization',
  templateUrl: './separator-customization.component.html',
  styleUrls: []
})
export class SeparatorCustomizationComponent {
  @Input() settings!: SeparatorSettings;

  lineStyles = [
    {
      label: 'LineStyle.Solid',
      value: LineStyle.Solid,
    },
    {
      label: 'LineStyle.Dotted',
      value: LineStyle.Dotted,
    },
    {
      label: 'LineStyle.Dashed',
      value: LineStyle.Dashed,
    },
  ]
}

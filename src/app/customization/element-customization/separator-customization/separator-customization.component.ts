import { Component, Input } from '@angular/core';
import { LineStyle, SeparatorLineSettings } from '../../../services/form.service';

@Component({
  selector: 'app-separator-customization',
  templateUrl: './separator-customization.component.html',
  styleUrls: ['./separator-customization.component.scss'],
})
export class SeparatorCustomizationComponent {
  @Input() settings!: SeparatorLineSettings;

  styleTypes = [
    {
      label: 'Solid',
      value: LineStyle.Solid,
    },
    {
      label: 'Dotted',
      value: LineStyle.Dotted,
    },
    {
      label: 'Dashed',
      value: LineStyle.Dashed,
    },
  ]
}

import { Component, Input } from '@angular/core';
import { Alignment, PictureSettings } from '../../../services/form.service';

@Component({
  selector: 'app-picture-customization',
  templateUrl: './picture-customization.component.html',
  styleUrls: [],
})
export class PictureCustomizationComponent {
  @Input() settings!: PictureSettings;

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

import { Component, Input } from '@angular/core';
import { Alignment, PictureSettings } from '../../../services/form.service';

@Component({
  selector: 'app-picture-customization',
  templateUrl: './picture-customization.component.html',
  styleUrls: ['./picture-customization.component.scss'],
})
export class PictureCustomizationComponent {
  @Input() settings!: PictureSettings;

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

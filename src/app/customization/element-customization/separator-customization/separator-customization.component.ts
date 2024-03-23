import { Component, Input } from '@angular/core';
import { SeparatorSettings } from 'src/app/services/form.service';

@Component({
  selector: 'app-separator-customization',
  templateUrl: './separator-customization.component.html',
  styleUrls: ['./separator-customization.component.scss']
})
export class SeparatorCustomizationComponent {
  @Input() settings!: SeparatorSettings;
}

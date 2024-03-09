import { Component, Input } from '@angular/core';
import { CheckboxSettings } from '../../../services/form.service';

@Component({
  selector: 'app-checkbox-customization',
  templateUrl: './checkbox-customization.component.html',
  styleUrls: ['./checkbox-customization.component.scss'],
})
export class CheckboxCustomizationComponent {
  @Input() settings!: CheckboxSettings;
}

import { Component, Input } from '@angular/core';
import { InputSettings, InputType } from 'src/app/services/form.service';

@Component({
  selector: 'app-input-customization',
  templateUrl: './input-customization.component.html',
  styleUrls: []
})
export class InputCustomizationComponent {
  @Input() settings!: InputSettings;

  inputTypes = [
    {
      label: 'InputCustomization.InputType.Text',
      value: InputType.Text,
    },
    {
      label: 'InputCustomization.InputType.Email',
      value: InputType.Email,
    },
    {
      label: 'InputCustomization.InputType.Password',
      value: InputType.Password,
    },
  ]
}

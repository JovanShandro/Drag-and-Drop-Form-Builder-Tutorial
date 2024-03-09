import { Component, Input } from '@angular/core';
import { InputSettings, InputType } from 'src/app/services/form.service';

@Component({
  selector: 'app-input-customization',
  templateUrl: './input-customization.component.html',
  styleUrls: ['./input-customization.component.scss']
})
export class InputCustomizationComponent {
  @Input() settings!: InputSettings;

  inputTypes = [
    {
      label: 'Text',
      value: InputType.Text,
    },
    {
      label: 'Email',
      value: InputType.Email,
    },
    {
      label: 'Password',
      value: InputType.Password,
    },
  ]
}

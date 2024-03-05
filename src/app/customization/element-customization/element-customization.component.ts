import {Component, Input} from '@angular/core';
import {
  ButtonSettings,
  FormField,
  FormFieldSettings,
  FormFieldType,
  InputType
} from '../../services/form.service';

@Component({
  selector: 'app-element-customization',
  templateUrl: './element-customization.component.html',
  styleUrls: ['./element-customization.component.scss'],
})
export class ElementCustomizationComponent {
  @Input() selectedField!: FormField | null;

  inputTypes = Object.keys(InputType);

  fieldTypes = FormFieldType;

  asButtonSettings(settings: FormFieldSettings) {
    return settings as ButtonSettings;
  }
}
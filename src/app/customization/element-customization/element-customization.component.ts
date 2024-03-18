import { Component, Input } from '@angular/core';
import {
  ButtonSettings,
  FormField,
  FormFieldSettings,
  FormFieldType,
  InputType,
  InputSettings,
  TextareaSettings,
  CheckboxSettings,
  TextSettings,
  DropdownSettings,
  RadioButtonSettings,
  SpacerSettings,
  PictureSettings,
  SeparatorLineSettings,
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

  asInputSettings(settings: FormFieldSettings) {
    return settings as InputSettings;
  }

  asTextareaSettings(settings: FormFieldSettings) {
    return settings as TextareaSettings;
  }

  asCheckboxSettings(settings: FormFieldSettings) {
    return settings as CheckboxSettings;
  }

  asTextSettings(settings: FormFieldSettings) {
    return settings as TextSettings;
  }

  asDropdownSettings(settings: FormFieldSettings) {
    return settings as DropdownSettings;
  }

  asRadioButtonsSettings(settings: FormFieldSettings) {
    return settings as RadioButtonSettings;
  }

  asSpacerSettings(settings: FormFieldSettings) {
    return settings as SpacerSettings;
  }

  asPictureSettings(settings: FormFieldSettings) {
    return settings as PictureSettings;
  }

  asSeparatorSettings(settings: FormFieldSettings) {
    return settings as SeparatorLineSettings;
  }
}

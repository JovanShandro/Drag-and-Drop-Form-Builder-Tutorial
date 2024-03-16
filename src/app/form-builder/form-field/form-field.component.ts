import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ButtonSettings,
  FormField,
  FormFieldSettings,
  FormFieldType,
  InputSettings,
  TextareaSettings,
  FormService,
  CheckboxSettings,
  TextSettings,
  DropdownSettings,
  RadioButtonSettings,
  SpacerSettings,
  PictureSettings,
} from '../../services/form.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() field!: FormField;

  formFieldType = FormFieldType;
  selectedField$: Observable<FormField | null> = of(null);

  constructor(private formService: FormService) {
    this.selectedField$ = this.formService.selectedField$;
  }

  selectField() {
    if (this.field?.fieldType === FormFieldType.Empty) {
      return;
    }

    this.formService.selectedField$.next(this.field);
  }

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

  asRadioButtonSettings(settings: FormFieldSettings) {
    return settings as RadioButtonSettings;
  }

  asSpacerSettings(settings: FormFieldSettings) {
    return settings as SpacerSettings;
  }

  asPictureSettings(settings: FormFieldSettings) {
    return settings as PictureSettings;
  }
}

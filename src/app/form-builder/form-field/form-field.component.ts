import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  ButtonSettings,
  FormField,
  FormFieldSettings,
  FormFieldType,
  FormService,
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
}
import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../../form.service';

@Component({
  selector: 'app-element-customization',
  templateUrl: './element-customization.component.html',
  styleUrls: ['./element-customization.component.scss'],
})
export class ElementCustomizationComponent {
  @Input() selectedField!: FormField | null;

  fieldTypes = FormFieldType;

  buttonTypes = [
    {
      label: 'Submit',
      value: 'submit',
    },
    {
      label: 'Button',
      value: 'button',
    },
  ];
}

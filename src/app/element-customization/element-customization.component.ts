import { Component, Input, OnInit } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-element-customization',
  templateUrl: './element-customization.component.html',
  styleUrls: ['./element-customization.component.scss'],
})
export class ElementCustomizationComponent {
  @Input() selectedField: FormField | null = null;
  fieldTypes = FormFieldType;

  buttonTypes = [
    {
      value: 'button',
      label: 'Button',
    },
    {
      value: 'submit',
      label: 'Submit',
    },
  ];
}

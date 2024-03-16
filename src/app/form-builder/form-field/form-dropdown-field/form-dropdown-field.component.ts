import { Component, Input } from '@angular/core';
import { CheckboxSettings, DropdownSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-dropdown-field',
  templateUrl: './form-dropdown-field.component.html',
  styleUrls: ['./form-dropdown-field.component.scss']
})
export class FormDropdownFieldComponent {
  @Input() settings!: DropdownSettings;

  dropdownId = uuid();
}

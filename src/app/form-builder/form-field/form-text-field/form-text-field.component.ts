import { Component, Input } from '@angular/core';
import { TextSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-text-field',
  templateUrl: './form-text-field.component.html',
  styleUrls: ['./form-text-field.component.scss']
})
export class FormTextFieldComponent {

  @Input() settings!: TextSettings;

  textId = uuid();

}

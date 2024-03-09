import { Component, Input } from '@angular/core';
import { TextareaSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-form-textarea-field',
  templateUrl: './form-textarea-field.component.html',
  styleUrls: ['./form-textarea-field.component.scss'],
})
export class FormTextareaFieldComponent {
  @Input() settings!: TextareaSettings;

  textareaId = uuid();
}

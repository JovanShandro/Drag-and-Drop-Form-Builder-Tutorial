import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-triple-field-section',
  templateUrl: './triple-field-section.component.html',
  styleUrls: ['./triple-field-section.component.scss']
})
export class TripleFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

import { Component, Input } from '@angular/core';
import { FormField, FormFieldType } from '../form.service';

@Component({
  selector: 'app-quadruple-field-section',
  templateUrl: './quadruple-field-section.component.html',
  styleUrls: ['./quadruple-field-section.component.scss']
})
export class QuadrupleFieldSectionComponent {
  @Input() field?: FormField;

  formFieldType = FormFieldType;
}

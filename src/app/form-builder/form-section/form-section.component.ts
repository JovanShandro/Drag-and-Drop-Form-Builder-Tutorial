import { Component, Input } from '@angular/core';
import { FormSection, FormSectionType } from '../../services/form.service';

@Component({
  selector: 'app-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss'],
})
export class FormSectionComponent {
  @Input() section!: FormSection;

  formSectionType = FormSectionType;
}

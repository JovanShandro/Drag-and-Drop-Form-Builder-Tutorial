import { Component, Input } from '@angular/core';
import { TextareaSettings } from 'src/app/services/form.service';

@Component({
  selector: 'app-textarea-customization',
  templateUrl: './textarea-customization.component.html',
  styleUrls: ['./textarea-customization.component.scss']
})
export class TextareaCustomizationComponent {
  @Input() settings!: TextareaSettings;
}

import { Component, Input } from '@angular/core';
import { RadioButtonSettings } from '../../../services/form.service';
import { v4 as uuid } from 'uuid';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-radiobutton-customization',
  templateUrl: './radiobutton-customization.component.html',
  styleUrls: ['./radiobutton-customization.component.scss']
})
export class RadiobuttonCustomizationComponent {
  @Input() settings!: RadioButtonSettings;

  radioButtonId = uuid();

  trashIcon = faTrash;

  addOption() {
    this.settings.options.push({
      value: `Option ${this.settings.options.length + 1}`,
      label: `Option ${this.settings.options.length + 1}`,
      isSelected: false,
    });
  }

  deleteBtn(index: number){
    this.settings.options.splice(index, 1);
  }

}

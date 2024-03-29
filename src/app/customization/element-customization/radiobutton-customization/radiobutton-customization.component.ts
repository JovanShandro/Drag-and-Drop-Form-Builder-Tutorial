import { Component, Input } from '@angular/core';
import { RadioButtonSettings } from '../../../services/form.service';
import { v4 as uuid } from 'uuid';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-radiobutton-customization',
  templateUrl: './radiobutton-customization.component.html',
  styleUrls: [],
})
export class RadiobuttonCustomizationComponent {
  @Input() settings!: RadioButtonSettings;
  radioButtonId = uuid();
  trashIcon = faTrash;

  addOption() {
    this.settings.options.push({
      value: `Option ${this.settings.options.length + 1}`,
      label: `Option ${this.settings.options.length + 1}`,
    });
  }

  deleteOption(index: number) {
    const isDeletingSelectedValue =
      this.settings.selectedValue === this.settings.options[index].value;

    this.settings.options.splice(index, 1);

    if (isDeletingSelectedValue) {
      this.settings.selectedValue = this.settings.options?.[0]?.value || null;
    }
  }

  onSelect(checked: boolean, index: number) {
    this.settings.selectedValue = checked
      ? this.settings.options[index].value
      : null;
  }
}

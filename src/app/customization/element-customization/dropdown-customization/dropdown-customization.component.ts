import { Component, Input } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DropdownSettings } from 'src/app/services/form.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dropdown-customization',
  templateUrl: './dropdown-customization.component.html',
  styleUrls: ['./dropdown-customization.component.scss']
})
export class DropdownCustomizationComponent {
removeOption(_t32: number) {
throw new Error('Method not implemented.');
}
  @Input() settings!: DropdownSettings;
  trashIcon = faTrash;

  checkboxId = uuid();

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

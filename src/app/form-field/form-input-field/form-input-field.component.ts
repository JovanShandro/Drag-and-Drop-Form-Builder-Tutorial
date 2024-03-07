import { Component, Input, OnInit } from '@angular/core';
import { InputSettings } from 'src/app/form.service';

@Component({
  selector: 'app-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrls: ['./form-input-field.component.scss'],
})
export class FormInputFieldComponent implements OnInit {

  @Input() settings!: InputSettings;

  constructor() { }

  ngOnInit(): void {
  }

}

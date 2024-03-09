import { Component, Input, OnInit } from '@angular/core';
import { TextareaSettings } from 'src/app/services/form.service';

@Component({
  selector: 'app-form-textarea-field',
  templateUrl: './form-textarea-field.component.html',
  styleUrls: ['./form-textarea-field.component.scss'],
})
export class FormTextareaFieldComponent implements OnInit {

  @Input() settings!: TextareaSettings;

  constructor() { }

  ngOnInit(): void {
  }

}

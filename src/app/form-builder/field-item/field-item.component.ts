import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-item',
  templateUrl: './field-item.component.html',
  styleUrls: ['./field-item.component.scss']
})
export class FieldItemComponent implements OnInit {

  @Input() icon!: string;
  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

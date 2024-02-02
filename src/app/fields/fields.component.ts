import { Component, Input, OnInit } from '@angular/core';
import { DraggableElementsList } from '../data/DraggableElementsList';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {

  elements: { title: string; icon: string; }[] = DraggableElementsList;

  constructor() { }

  ngOnInit(): void {
  }

  

}

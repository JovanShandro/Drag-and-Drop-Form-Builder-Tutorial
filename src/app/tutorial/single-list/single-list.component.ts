import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.scss'],
})
export class SingleListComponent {
  list = [
    {
      id: 1,
      name: 'Name one',
    },
    {
      id: 2,
      name: 'Name two',
    },
    {
      id: 3,
      name: 'Name three',
    },
    {
      id: 4,
      name: 'Name four',
    },
  ];

  onDrop(event: CdkDragDrop<any>) {
    // Reorder in the list
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }
}

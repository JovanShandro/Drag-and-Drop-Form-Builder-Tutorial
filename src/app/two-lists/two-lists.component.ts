import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two-lists',
  templateUrl: './two-lists.component.html',
  styleUrls: ['./two-lists.component.scss'],
})
export class TwoListsComponent {
  dummyData = { test: '1' };

  listOne = [
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

  listTwo = [
    {
      id: 5,
      name: 'Name five',
    },
    {
      id: 6,
      name: 'Name six',
    },
    {
      id: 7,
      name: 'Name seven',
    },
  ];

  onDrop(event: CdkDragDrop<any>) {
    const previousList = event.previousContainer.data;
    const currentList = event.container.data;
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(currentList, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        previousList,
        currentList,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

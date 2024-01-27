import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

interface ListItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-two-lists-horizontal',
  templateUrl: './two-lists-horizontal.component.html',
  styleUrls: ['./two-lists-horizontal.component.scss'],
})
export class TwoListsHorizontalComponent {
  listThree: ListItem[] = [
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

  listFour: ListItem[] = [
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

  onDrop(event: CdkDragDrop<ListItem[]>) {
    const previousList = event.previousContainer.data;
    const currentList = event.container.data;
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

  noReturnPredicate() {
    return false;
  }

  lessThanThreePredicate(item: CdkDrag<ListItem>) {
    return item.data.id < 3;
  }
}

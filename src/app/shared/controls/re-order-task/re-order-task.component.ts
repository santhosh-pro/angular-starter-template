import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-re-order-task',
  templateUrl: './re-order-task.component.html',
  styleUrls: ['./re-order-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReOrderTaskComponent implements OnInit {

  @Input() todoName:string;
  @Input() doneName:string;

  @Input() todo:any=  [
    {
      id:1,
      name:'Get to work'
    },
    {
      id:2,
      name:'Go home'
    }
  ];

  @Input() done:any=[
  ];
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}

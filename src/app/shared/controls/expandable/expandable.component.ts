import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./expandable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpandableComponent implements OnInit , OnDestroy{

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() title: string = '';
  @Input() description: string = '';

  protected _onDestroy = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}

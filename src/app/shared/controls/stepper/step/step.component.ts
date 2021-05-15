import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() label: string = '';

  protected _onDestroy = new Subject<void>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
}

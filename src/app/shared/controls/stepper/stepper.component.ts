import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit {

  
  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() orientation: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

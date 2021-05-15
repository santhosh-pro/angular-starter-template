import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}

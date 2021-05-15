import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavOption } from './side-nav-option';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent implements OnInit {

  @Input() isFullWidth: boolean = true;
  @Input() isDisabled: boolean = false;
  @Input() title: string = '';
  @Input() items: SideNavOption[] = [];
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nav(item:SideNavOption) {
    this.router.navigate([item.route]);
  }

}

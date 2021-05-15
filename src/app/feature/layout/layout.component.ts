import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SideNavOption } from 'src/app/shared/controls/side-nav/side-nav-option';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit {
  menu: SideNavOption[] = [
    {
      name: 'Dashboard',
      route: '/dashboard',
    },
    {
      name: 'Menu 2',
      route: '/',
      children: [
        {
          name: 'Child Menu 2',
          route: '/',
        },
      ],
    },
    {
      name: 'Menu 3',
      route: '/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

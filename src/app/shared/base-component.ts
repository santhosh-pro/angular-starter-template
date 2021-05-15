import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-base',
  template: '',
  styles: ['']
})
export class BaseComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

  autoUnSubscribe(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

}

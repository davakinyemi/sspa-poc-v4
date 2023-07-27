import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterStateService } from 'sspa-poc-todo-lib';
// import { CounterStateService$ } from '@sspa-poc/state-service';

@Component({
  selector: 'app-counter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { 'class': 'd-flex w-100 h-100' },
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent /* implements OnInit, OnDestroy */ {

  counter$: Observable<number> = this.counterState.$count;
  // counter$: Observable<number> = CounterStateService$.$count;
  // subscription!: Subscription;
  // count!: number;

  constructor(private counterState: CounterStateService) {

  }

  /*ngOnInit(): void {
    this.subscription = CounterStateService$.stateSubject.subscribe((state: { count: number; }) => {
      this.count = state.count;
    });
  }*/

  /*ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }*/

  increment() {
    // CounterStateService$.increment();
    this.counterState.increment();
  }

  decrement() {
    // CounterStateService$.decrement();
    this.counterState.decrement();
  }
}

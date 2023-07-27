import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CounterStateService } from 'sspa-poc-todo-lib';
// import { CounterStateService$ } from '@sspa-poc/state-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit, OnDestroy {

  counter$: Observable<number> = this.counterState.$count;
  // ccounter$: Observable<number> = CounterStateService$.$count;
  subscription!: Subscription;
  count!: number;

  constructor(private cdr: ChangeDetectorRef, private counterState: CounterStateService) {

  }

  ngOnInit(): void {
    /* this.subscription = CounterStateService$.stateSubject.subscribe((state: { count: number; }) => {
      this.count = state.count;
      this.cdr.detectChanges();
    }); */
    this.subscription = this.counterState.stateSubject.subscribe((state: { count: number; }) => {
      this.count = state.count;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

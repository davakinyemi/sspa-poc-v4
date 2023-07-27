import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { SessionService } from '@sspa-poc/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sspa-poc-layout';

  ngOnInit() {
    if (!SessionService.getToken()) {
      window.history.pushState(null, '', '/login');
    }

    document.querySelector('body')?.classList.add('mb');
  }

  ngOnDestroy(): void {
    document.querySelector('body')?.classList.remove('mb');
  }
}

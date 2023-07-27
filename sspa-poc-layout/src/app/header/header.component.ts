import { Component, OnInit } from '@angular/core';
import { SessionService } from '@sspa-poc/shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username!: string;

  constructor() { }

  ngOnInit(): void {
    let user = SessionService.getUser();
    this.username = user ? JSON.parse(user).username : '';
  }

  logout(): void {
    SessionService.stopSession();
  }

}

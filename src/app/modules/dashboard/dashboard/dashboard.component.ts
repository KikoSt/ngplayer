import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}

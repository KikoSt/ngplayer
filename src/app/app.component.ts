import { Component } from '@angular/core';
import { User } from './models/user.model';

import * as JsPDF from 'jspdf';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngplayer';
  private user: User;

  constructor() {
      this.user = new User('patches', 'n0P4ssw0rd');
  }

  public downloadPdf(pdfId: number) {
  }
}

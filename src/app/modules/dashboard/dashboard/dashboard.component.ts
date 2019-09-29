import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../models/user.model';
import { PdfService } from '../../../services/pdf.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input()
  user: User;

  constructor(private pdfService: PdfService) {
      this.pdfService = pdfService;
  }

  ngOnInit() {
  }

  downloadPdf(pdfId) {
      console.log('HERE it is: %o', this.pdfService);
      const pdf = this.pdfService.downloadPdf(1);
      const blob = pdf.output('blob');
      window.open(URL.createObjectURL(blob));

      const pdfTarget = $('#js-pdf-target');
      console.log('pdfTarget = %o', pdfTarget);
      pdfTarget.css('border', '2px solid blue');
      pdfTarget.src = pdf;

      return pdf;
  }

}

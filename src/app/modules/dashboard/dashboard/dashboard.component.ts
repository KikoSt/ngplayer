import { Component, OnInit, Input } from '@angular/core';

import { User } from '../../../models/user.model';
import { PdfService } from '../../../services/pdf.service';
import * as JsPDF from 'jspdf';

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

  downloadPdf(pdfId: number) {
      const pdf: JsPDF = this.pdfService.downloadPdfDoc(pdfId);
      return pdf;
  }

  showPdfInNewWindow(pdfId: number) {
      const pdfBlob: Blob = this.pdfService.downloadPdfBlob(pdfId);
      window.open(URL.createObjectURL(pdfBlob));

  }

  showPdfInContainer(pdfId: number, domTargetId: string) {
      const pdfBlob: Blob = this.pdfService.downloadPdfBlob(pdfId);
      const $domTarget = $('#' + domTargetId); // TODO: check!

      const pdfUrl = URL.createObjectURL(pdfBlob);

      if (!$domTarget) {
          return false;
      }

      $domTarget.css('border', '2px solid blue');
      $domTarget.data = pdfBlob;
  }
}

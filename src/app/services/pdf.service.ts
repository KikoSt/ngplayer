import { Injectable } from '@angular/core';

import * as JsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  private downloadPdf(pdfId: number, downloadFormat: string = 'blob'): JsPDF {
      console.log('pdfId = %o', pdfId);
      console.log('downloadFormat', downloadFormat);

      const doc = new JsPDF();
      doc.text(20, 20, 'Hello ' + pdfId);

      return doc;
  }

  public downloadPdfDoc(pdfId: number): JsPDF {
      return this.downloadPdf(pdfId);

    }

  public downloadPdfBlob(pdfId: number): Blob {
        const doc = this.downloadPdf(pdfId);
        return doc.output('blob');
    }
}

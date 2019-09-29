import { Injectable } from '@angular/core';

import * as JsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }

  public downloadPdf(pdfId: number) {
      console.log('pdfId = %o', pdfId);
      const doc = new JsPDF();
      doc.text(20, 20, 'Hello ' + pdfId);
      // doc.save('Test.pdf');
      return doc;
  }

}

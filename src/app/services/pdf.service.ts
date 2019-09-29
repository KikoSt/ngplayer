import { Injectable } from '@angular/core';

import * as JsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor() { }

  public downloadPdf(pdfId: number) {
      console.log('pdfId = %o', pdfId);
      const doc = new JsPDF();
      doc.text(20, 20, 'Hello ' + this.user.username);
      doc.save('Test.pdf');
  }

}

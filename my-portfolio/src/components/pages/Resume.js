import React from "react";
import resume from '../../utils/Resume_WD.pdf';
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflowY: "hidden", marginTop: "50px" }}>
      <Document file={resume}>
        <Page pageNumber={1} renderTextLayer={false} />
      </Document>
    </div>
  );
}

"use client";

import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import CSS for annotations
import { useState } from 'react';

// Set the worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }: { fileUrl: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onLoadSuccess = (pdf: any) => {
    setNumPages(pdf.numPages);
  };

  const onLoadError = (error: any) => {
    setError(`Error loading PDF: ${error.message}`);
  };

  return (
    <div style={{ height: '100vh' }}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Document
        file={fileUrl}
        onLoadSuccess={onLoadSuccess}
        onLoadError={onLoadError}
      >
        {numPages && <Page pageNumber={1} />}
      </Document>
    </div>
  );
};

export default PdfViewer;


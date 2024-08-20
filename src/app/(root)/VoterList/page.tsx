"use client"
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const VoterList = () => {
  const pdfUrl = '/pdf/voter.pdf'; 

  const workerUrl = 'https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <section className="font-bold text-center mt-16 text-4xl">
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl md:w-11/12 lg:w-10/12 xl:w-8/12" style={{ height: '80vh', maxHeight: '1000px' }}>
        <Worker workerUrl={workerUrl}>
          <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
        </Worker>
      </div>
    </div>
  </section>
  );
};

export default VoterList;

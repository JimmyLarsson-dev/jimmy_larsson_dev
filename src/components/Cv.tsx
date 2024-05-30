import cv from '../assets/images/cv_JL_eng.pdf'
import {Document, Page} from 'react-pdf'
import { pdfjs } from 'react-pdf';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import {useState} from "react";

export default function Cv() {

    type PDFFile = string | File | null;
    const [numPages, setNumPages] = useState<number>();
    const [file, setFile] = useState<PDFFile>('../assets/images/cv_JL_eng.pdf');

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
    ).toString();

    const options = {
        cMapUrl: '/cmaps/',
        standardFontDataUrl: '/standard_fonts/',
    }
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    return (
        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
                <Page
                    // key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={1080}
                />
            ))}
        </Document>
    )
}

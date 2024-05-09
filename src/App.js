import React from 'react';
import TextEditor from './TextEditor';

function App() {
  return (
    <div>
      <TextEditor/>
    </div>
  )
}

export default App






































// import React, { useState, useEffect, useRef } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import DOMPurify from "dompurify";
// import { jsPDF } from "jspdf";
// import Logo from './Logo.png';
// import './App.css';

// const App = () => {
//   const [editorText, setEditorText] = useState("");
//   const editorRef = useRef(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.focus();
//     }
//   }, []);

//   const handleChange = (_content, _delta, _source, editor) => {
//     const sanitizedHtml = DOMPurify.sanitize(editor.getHTML());
//     setEditorText(sanitizedHtml);
//   };

//   const generatePdf = () => {
//     const pdf = new jsPDF();
//     const pw = pdf.internal.pageSize.getWidth();
//     const ph = pdf.internal.pageSize.getHeight();
//     const lineHeight = 12; 
//     let minPages = 2; 

//     const plainText = editorText.replace(/<[^>]+>/g, '');
//     const paragraphs = plainText.split('\n'); 

//     let yPosition = 40; 
//     let pageCount = 1;

//     const generateFooter = (pageNumber) => {
//       pdf.setFontSize(10);
//       pdf.text(`Page ${pageNumber} of ${minPages}`, pw / 2, ph - 10, { align: "center" });
//       pdf.text(`Copyright © ${new Date().getFullYear()}`, pw / 2, ph - 20, { align: "center" });
//     };

//     pdf.addImage(Logo, "PNG", 10, 10, 20, 20);
//     pdf.setFontSize(12);
//     generateFooter(pageCount);

//     paragraphs.forEach((paragraph, index) => {
//       const lines = pdf.splitTextToSize(paragraph, pw - 40); 
//       lines.forEach((line, lineIndex) => {
//         const lineLength = pdf.getStringUnitWidth(line) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
//         const startX = index === 0 && lineIndex === 0 ? pw - lineLength - 20 : 20;
//         pdf.text(line, startX, yPosition);
//         yPosition += lineHeight; 
//         if (yPosition > ph - 40) {
//           pdf.addPage();
//           pageCount++;
//           minPages++;
//           pdf.addImage(Logo, "PNG", 10, 10, 20, 20);
//           pdf.setFontSize(12);
//           generateFooter(pageCount);
//           yPosition = 40;
//         }
//       });
//     });

//     for (let i = pageCount; i < minPages; i++) {
//       pdf.addPage();
//       pdf.addImage(Logo, "PNG", 10, 10, 20, 20);
//       pdf.setFontSize(12);

//       generateFooter(i + 1);
//     }

//     pdf.autoPrint();
//     pdf.save('new.pdf');
//   };

//   return (
//     <div>
//       <h2>Text Editor</h2>
//       <ReactQuill ref={editorRef} value={editorText} onChange={handleChange} style={{ margin: '30px', direction: 'ltr' }} />
//       <button className="btn" onClick={generatePdf}>Print PDF</button>
//     </div>
//   );
// };

// export default App;
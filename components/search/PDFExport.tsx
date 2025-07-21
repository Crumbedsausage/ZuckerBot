'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { Ad, AIInsights } from '@/types';

interface PDFExportProps {
  ads: Ad[];
  insights: AIInsights;
  query: string;
}

export default function PDFExport({ ads, insights, query }: PDFExportProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      const pdf = new jsPDF();
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 20;
      let yPos = margin;

      // Title
      pdf.setFontSize(24);
      pdf.setTextColor(59, 130, 246); // Blue color
      pdf.text('AdIntel Report', margin, yPos);
      yPos += 15;

      pdf.setFontSize(14);
      pdf.setTextColor(100, 100, 100);
      pdf.text(`Search Query: "${query}"`, margin, yPos);
      yPos += 10;

      pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, yPos);
      yPos += 20;

      // AI Insights Section
      pdf.setFontSize(18);
      pdf.setTextColor(0, 0, 0);
      pdf.text('AI Insights', margin, yPos);
      yPos += 15;

      // Common Hooks
      pdf.setFontSize(14);
      pdf.text('Most Common Hooks:', margin, yPos);
      yPos += 8;
      
      pdf.setFontSize(11);
      insights.commonHooks.forEach((hook) => {
        pdf.text(`• ${hook}`, margin + 5, yPos);
        yPos += 6;
      });
      yPos += 5;

      // Top CTAs
      pdf.setFontSize(14);
      pdf.text('Top CTAs:', margin, yPos);
      yPos += 8;
      
      pdf.setFontSize(11);
      insights.topCTAs.forEach((cta) => {
        pdf.text(`• ${cta}`, margin + 5, yPos);
        yPos += 6;
      });
      yPos += 5;

      // Creative Themes
      pdf.setFontSize(14);
      pdf.text('Creative Themes:', margin, yPos);
      yPos += 8;
      
      pdf.setFontSize(11);
      insights.creativeThemes.forEach((theme) => {
        pdf.text(`• ${theme}`, margin + 5, yPos);
        yPos += 6;
      });
      yPos += 5;

      // Recommendations
      pdf.setFontSize(14);
      pdf.text('Recommendations:', margin, yPos);
      yPos += 8;
      
      pdf.setFontSize(11);
      insights.recommendations.forEach((rec) => {
        const lines = pdf.splitTextToSize(`• ${rec}`, pageWidth - margin * 2 - 5);
        lines.forEach((line: string) => {
          if (yPos > 270) {
            pdf.addPage();
            yPos = margin;
          }
          pdf.text(line, margin + 5, yPos);
          yPos += 6;
        });
      });

      // Ads Section
      if (yPos > 200) {
        pdf.addPage();
        yPos = margin;
      } else {
        yPos += 20;
      }

      pdf.setFontSize(18);
      pdf.setTextColor(0, 0, 0);
      pdf.text('Ad Details', margin, yPos);
      yPos += 15;

      ads.forEach((ad, index) => {
        if (yPos > 220) {
          pdf.addPage();
          yPos = margin;
        }

        pdf.setFontSize(14);
        pdf.text(`${index + 1}. ${ad.brand} - ${ad.platform.toUpperCase()}`, margin, yPos);
        yPos += 8;

        pdf.setFontSize(11);
        const headlineLines = pdf.splitTextToSize(`Headline: ${ad.headline}`, pageWidth - margin * 2);
        headlineLines.forEach((line: string) => {
          pdf.text(line, margin + 5, yPos);
          yPos += 6;
        });

        if (ad.description) {
          const descLines = pdf.splitTextToSize(`Description: ${ad.description}`, pageWidth - margin * 2);
          descLines.forEach((line: string) => {
            pdf.text(line, margin + 5, yPos);
            yPos += 6;
          });
        }

        if (ad.cta) {
          pdf.text(`CTA: ${ad.cta}`, margin + 5, yPos);
          yPos += 6;
        }

        pdf.text(`Active: ${ad.dateRange}`, margin + 5, yPos);
        yPos += 12;
      });

      // Save the PDF
      pdf.save(`AdIntel-Report-${query}-${Date.now()}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2"
    >
      {isGenerating ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download PDF</span>
        </>
      )}
    </button>
  );
}
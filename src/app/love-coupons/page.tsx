'use client';
import { useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import CouponCard from './components/CouponCard';
import jsPDF from 'jspdf';

export default function LoveCoupons() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals?.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
  }, []);

  const coupons = [
    {
      id: 'coupon_1',
      title: '10 x Dates of Her Choice',
      description: 'I plan, pick the place, time, everything',
      icon: '🌟',
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 'coupon_2',
      title: '5 x Picnic Dates',
      description: 'A dreamy outdoor picnic planned by me',
      icon: '🧺',
      color: 'from-pink-400 to-rose-400'
    },
    {
      id: 'coupon_3',
      title: '20 x Movie Marathon Night',
      description: 'Her picks, no complaints',
      icon: '🎬',
      color: 'from-purple-400 to-indigo-400'
    },
    {
      id: 'coupon_4',
      title: '5 x No Questions Asked Request',
      description: 'One wild card, no limits',
      icon: '✨',
      color: 'from-amber-400 to-orange-400'
    },
    {
      id: 'coupon_5',
      title: '50 x Breakfast in Bed',
      description: 'A lazy morning treat',
      icon: '🥞',
      color: 'from-yellow-400 to-amber-400'
    },
    {
      id: 'coupon_6',
      title: '20 x Full Day of Pampering',
      description: 'Spa vibes at home',
      icon: '💆',
      color: 'from-pink-400 to-purple-400'
    },
    {
      id: 'coupon_7',
      title: '5 x "You Were Right" Card',
      description: 'To be played at any time, no arguments',
      icon: '👑',
      color: 'from-rose-400 to-pink-400'
    },
    {
      id: 'coupon_8',
      title: '20 x Any acts of service',
      description: 'To be played at any time, no arguments',
      icon: '💜',
      color: 'from-rose-400 to-pink-400'
    },
    {
      id: 'coupon_9',
      title: '2 x Vacation Getaways',
      description: 'We pack, I plan, you relax',
      icon: '✈️',
      color: 'from-rose-400 to-pink-400'
    }
  ];

  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    const couponHeight = 35;
    const spacing = 5;

    // Map emojis to text alternatives for PDF
    const iconTextMap: { [key: string]: string } = {
      '🌟': 'DATES',
      '🧺': 'PICNIC',
      '🎬': 'MOVIE',
      '✨': 'SPARKLE',
      '🥞': 'BREAKFAST',
      '💆': 'SPA',
      '👑': 'YOU ARE RIGHT',
      '💜': 'SERVICE',
      '✈️': 'TRAVEL'
    };

    // Title
    pdf.setFontSize(28);
    pdf.setTextColor(139, 92, 246); // Purple
    pdf.text('Love Coupons For Sifat', pageWidth / 2, 20, { align: 'center' });

    pdf.setFontSize(12);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Redeem these anytime in the year 2026. To be fulfilled by Saqib', pageWidth / 2, 28, { align: 'center' });

    let yPosition = 40;

    coupons.forEach((coupon, index) => {
      // Check if we need a new page
      if (yPosition + couponHeight > pageHeight - margin) {
        pdf.addPage();
        yPosition = margin;
      }

      // Coupon background with gradient effect (simulated with rectangle)
      const gradientColors = {
        'from-purple-400 to-pink-400': [167, 139, 250],
        'from-pink-400 to-rose-400': [244, 114, 182],
        'from-purple-400 to-indigo-400': [167, 139, 250],
        'from-amber-400 to-orange-400': [251, 191, 36],
        'from-yellow-400 to-amber-400': [250, 204, 21],
        'from-pink-400 to-purple-400': [244, 114, 182],
        'from-rose-400 to-pink-400': [251, 113, 133]
      };

      const color = gradientColors[coupon.color as keyof typeof gradientColors] || [167, 139, 250];

      // Main coupon box
      pdf.setDrawColor(200, 200, 200);
      pdf.setLineWidth(0.5);
      pdf.rect(margin, yPosition, pageWidth - 2 * margin, couponHeight);

      // Colored header section
      pdf.setFillColor(color[0], color[1], color[2]);
      pdf.rect(margin, yPosition, pageWidth - 2 * margin, 12, 'F');

      // Icon text in header (replacing emoji)
      const iconText = iconTextMap[coupon.icon] || 'LOVE';
      pdf.setFontSize(10);
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.text(iconText, margin + 5, yPosition + 8);

      // Dotted line separator (tear-off effect)
      pdf.setLineDash([2, 2]);
      pdf.setDrawColor(150, 150, 150);
      pdf.line(margin + 5, yPosition + 12, pageWidth - margin - 5, yPosition + 12);
      pdf.setLineDash([]);

      // Coupon title
      pdf.setFontSize(14);
      pdf.setTextColor(50, 50, 50);
      pdf.setFont('helvetica', 'bold');
      pdf.text(coupon.title, pageWidth / 2, yPosition + 19, { align: 'center' });

      // Description
      pdf.setFontSize(10);
      pdf.setTextColor(100, 100, 100);
      pdf.setFont('helvetica', 'normal');
      pdf.text(coupon.description, pageWidth / 2, yPosition + 25, { align: 'center' });

      // Bottom dotted line
      pdf.setLineDash([2, 2]);
      pdf.setDrawColor(200, 200, 200);
      pdf.line(margin + 10, yPosition + 28, pageWidth - margin - 10, yPosition + 28);
      pdf.setLineDash([]);

      // Redeem text (removed emoji)
      pdf.setFontSize(8);
      pdf.setTextColor(139, 92, 246);
      pdf.setFont('helvetica', 'bold');
      pdf.text('REDEEMABLE ANYTIME', pageWidth / 2, yPosition + 32, { align: 'center' });

      // Side perforations (dots)
      for (let i = 0; i < 8; i++) {
        const dotY = yPosition + 2 + (i * (couponHeight - 4) / 7);
        pdf.setFillColor(240, 240, 240);
        pdf.circle(margin - 1, dotY, 1, 'F');
        pdf.circle(pageWidth - margin + 1, dotY, 1, 'F');
      }

      yPosition += couponHeight + spacing;
    });

    // Save the PDF
    pdf.save('Love-Coupons-for-Sifat.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-purple-50 to-pink-50">
      <Header />
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-foreground leading-tight tracking-tight">
              Love <span className="text-primary italic">Coupons</span> for Sifat
            </h1>
            <p className="text-lg md:text-xl font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Redeem these anytime for special moments together 💜 To be fulfiled by Saqib.
            </p>

            {/* Download PDF Button */}
            <button
              onClick={generatePDF}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-inter font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download PDF
            </button>
          </div>

          {/* Coupons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {coupons?.map((coupon, index) => (
              <CouponCard
                key={coupon?.id}
                title={coupon?.title}
                description={coupon?.description}
                icon={coupon?.icon}
                color={coupon?.color}
                delay={index * 100}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
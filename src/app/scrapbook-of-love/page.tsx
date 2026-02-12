'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PolaroidCard from './components/PolaroidCard';
import Link from 'next/link';

export default function ScrapbookOfLove() {
  const [photos, setPhotos] = useState([
    {
      id: 'photo_1',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_19dc8c14b-1770349019466.png",
      alt: 'Couple holding hands at sunset on beach',
      caption: 'The day I knew you were the one 💕',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_2',
      image: "https://images.unsplash.com/photo-1661956600654-edac218fea67",
      alt: 'Couple laughing together in coffee shop',
      caption: 'Our favorite coffee spot ☕',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_3',
      image: "https://images.unsplash.com/photo-1604691634250-277ecfe9f2f1",
      alt: 'Couple walking through park in autumn',
      caption: 'That perfect autumn day 🍂',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_4',
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      alt: 'Couple cooking together in kitchen',
      caption: 'Cooking disasters and laughter 🍝',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_5',
      image: "https://images.unsplash.com/photo-1705998506167-17ad52e48697",
      alt: 'Couple watching sunset from mountain peak',
      caption: 'Our greatest adventure yet ⛰️',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_6',
      image: "https://images.unsplash.com/photo-1655759738611-6bf3df26a7e7",
      alt: 'Couple dancing in living room',
      caption: 'Dancing in the living room 💃',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_7',
      image: "https://images.unsplash.com/photo-1602585343695-35c6ea112fd7",
      alt: 'Couple reading books together on couch',
      caption: 'Quiet Sundays together 📚',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_8',
      image: "https://images.unsplash.com/photo-1703719978779-50292ede64e0",
      alt: 'Couple stargazing at night',
      caption: 'Under the stars with you ✨',
      rotation: 'rotate-slight-right'
    }
  ]);

  const handleImageUpload = (photoId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        setPhotos(prevPhotos => 
          prevPhotos.map(photo => 
            photo.id === photoId 
              ? { ...photo, image: imageUrl }
              : photo
          )
        );
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals?.length) return;

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
      { threshold: 0.1 }
    );
    reveals?.forEach((el) => observer?.observe(el));
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background via-purple-50 to-pink-50">
      <Header />
      <main className="flex-1 relative z-10">
        {/* Header Section */}
        <section className="container mx-auto px-6 py-20 max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-inter font-semibold uppercase tracking-wider rounded-full border-2 border-primary/20">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-foreground leading-tight">
              Scrapbook of{' '}
              <span className="text-primary italic">Love</span> 📸
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed italic">
              Every moment with you is a memory I want to keep forever
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
            {photos?.map((photo, index) => (
              <div key={photo?.id} className="relative group">
                <PolaroidCard
                  image={photo?.image}
                  alt={photo?.alt}
                  caption={photo?.caption}
                  rotation={photo?.rotation}
                  delay={index * 100}
                />
                
                {/* Upload Button Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <label 
                    htmlFor={`upload-${photo?.id}`}
                    className="cursor-pointer px-6 py-3 bg-gradient-to-r from-primary to-pink-500 text-white font-inter font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
                  >
                    📷 Upload Photo
                  </label>
                  <input
                    id={`upload-${photo?.id}`}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageUpload(photo?.id, e)}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-20 text-center reveal">
            <div className="inline-block p-8 bg-card border-4 border-primary/20 rounded-2xl max-w-2xl mx-auto shadow-xl">
              <p className="text-2xl md:text-3xl font-playfair italic text-foreground leading-relaxed">
                "Every love story is beautiful, but ours is my favorite."
              </p>
              <p className="mt-4 text-lg font-inter text-muted-foreground">
                💜 Forever and always 💜
              </p>
            </div>
          </div>

          {/* Love Coupons Link */}
          <div className="mt-12 text-center reveal">
            <Link
              href="/love-coupons"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-pink-500 text-white font-inter font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
            >
              <span>✨ Redeem Love Coupons</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
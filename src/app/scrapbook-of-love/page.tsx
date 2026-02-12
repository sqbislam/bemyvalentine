'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import PolaroidCard from './components/PolaroidCard';
import Link from 'next/link';

export default function ScrapbookOfLove() {
  const [photos, setPhotos] = useState([
    {
      id: 'photo_26',
      image: '/assets/images/asset%20(26).jpeg',
      alt: 'Couple sitting on couch cuddling together',
      caption: 'The day I knew you were the one 💕',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_1',
      image: '/assets/images/asset%20(1).jpeg',
      alt: 'Couple taking selfie together in front of famous landmark',
      caption: "Let's explore the world together 🌍",
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_2',
      image: '/assets/images/asset%20(2).jpeg',
      alt: 'Couple sharing a romantic picnic in park',
      caption: 'The day you knew I was the one 💕 | Here\'s to many more concerts together! ',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_3',
      image: '/assets/images/asset%20(3).jpeg',
      alt: 'Couple walking through park in autumn',
      caption: 'Forever my lockscreen 🔒',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_4',
      image: '/assets/images/asset%20(4).jpeg',
      alt: 'Couple cooking together in kitchen',
      caption: 'I had to put a ring on it 💍',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_5',
      image: '/assets/images/asset%20(5).jpeg',
      alt: 'Couple watching sunset from mountain peak',
      caption: 'Will forever stare at you 👀',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_6',
      image: '/assets/images/asset%20(6).jpeg',
      alt: 'Couple dancing in living room',
      caption: 'Let\'s always chase stars together ✨',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_7',
      image: '/assets/images/asset%20(7).jpeg',
      alt: 'Couple reading books together on couch',
      caption: 'Resort vacations with you are the best 🏖️',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_8',
      image: '/assets/images/asset%20(8).jpeg',
      alt: 'Couple stargazing at night',
      caption: 'Hot or cold we always stick together 🥶🔥',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_9',
      image: '/assets/images/asset%20(9).jpeg',
      alt: 'Couple having picnic in park',
      caption: 'My forever skincare partner 💆‍♂️💆',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_10',
      image: '/assets/images/asset%20(10).jpeg',
      alt: 'Couple taking selfie together',
      caption: 'My gorgeous driver and best friend 🚗 | Don\'t worry you will be the passenger princess from now on :3',
    },
    {
      id: 'photo_11',
      image: '/assets/images/asset%20(11).jpeg',
      alt: 'Couple hugging in rain',
      caption: 'Let\'s always glam up in desi together 👗👔',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_12',
      image: '/assets/images/asset%20(12).jpeg',
      alt: 'Couple sitting by fireplace together',
      caption: 'My forever princess 👑 | You always take my breathe away!',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_13',
      image: '/assets/images/asset%20(13).jpeg',
      alt: 'Couple on road trip together',
      caption: 'Let\'s always be the hot couple 🔥',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_14',
      image: '/assets/images/asset%20(14).jpeg',
      alt: 'Couple sharing umbrella in rain',
      caption: "I didn't know I could fall harder for you 💘 | Fuck babe you are gorgeous! ",
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_28',
      image: '/assets/images/asset(28).JPG',
      alt: 'Couple having fun together',
      caption: 'Always your loudest cheerleader! The best dancer I will ever witness 💃',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_15',
      image: '/assets/images/asset%20(15).jpeg',
      alt: 'Couple sitting on bench watching sunset',
      caption: 'The best mom to our Emzy 🐈👶',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_16',
      image: '/assets/images/asset%20(16).jpeg',
      alt: 'Couple having fun at amusement park',
      caption: 'Watching you have fun is my greatest joy :\') 💕',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_17',
      image: '/assets/images/asset%20(17).jpeg',
      alt: 'Couple sitting on couch watching movie',
      caption: 'Will be on my knees for you forever 💖',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_18',
      image: '/assets/images/asset%20(18).jpeg',
      alt: 'Couple taking walk in park together',
      caption: 'Evening walks and deep talks 🌳',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_19',
      image: '/assets/images/asset%20(19).jpeg',
      alt: 'Couple sharing ice cream together',
      caption: 'Will you be my forever partner?',
      rotation: 'rotate-slight-right'
    },

    {
      id: 'photo_21',
      image: '/assets/images/asset%20(21).jpeg',
      alt: 'Couple having fun at beach together',
      caption: 'We look so good together! Allahumma Barik',
      rotation: 'rotate-slight-left'
    },
    {
      id: 'photo_22',
      image: '/assets/images/asset%20(22).jpeg',
      alt: 'Couple sitting on bench in park together',
      caption: 'Let\'s take on the world together hand in hand 🌎',
      rotation: 'rotate-medium-right'
    },
    {
      id: 'photo_23',
      image: '/assets/images/asset%20(23).jpeg',
      alt: 'Couple sharing a kiss in the rain',
      caption: 'Will you be my forever dance partner? 💃',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_24',
      image: '/assets/images/asset%20(24).jpeg',
      alt: 'Couple sitting by lake together',
      caption: 'You are the only one that makes me hard 👀🥵 | The sexiest girl in this universe ',
      rotation: 'rotate-medium-left'
    },
    {
      id: 'photo_25',
      image: '/assets/images/asset%20(25).jpeg',
      alt: 'Couple having fun at carnival together',
      caption: 'I love taking pictures of you! Be my forever subject 📸',
      rotation: 'rotate-slight-right'
    },
    {
      id: 'photo_20',
      image: '/assets/images/asset%20(20).jpeg',
      alt: 'Couple sitting on rooftop watching stars',
      caption: 'Your eyes are the only stars I need to wish upon 🌟',
      rotation: 'rotate-medium-left'
    },

  ]);


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

              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-20 text-center reveal">
            <div className="inline-block p-8 bg-card border-4 border-primary/20 rounded-2xl max-w-2xl mx-auto shadow-xl">
              <p className="text-2xl md:text-3xl font-playfair italic text-foreground leading-relaxed">
                "You take my breath away every single day. I will always be your biggest fan, bestfriend, partner, husband and lover and support you in everything you do! I will always have your back and be your biggest cheerleader in everything you do! I love you more than words can express and I am so grateful to have you in my life. You are my everything and I can't wait to spend forever with you 💖"
              </p>
              <p className="mt-4 text-lg font-inter text-muted-foreground">
                💜 Your forver and always ~Saqib 💜
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
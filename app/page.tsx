"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

/**
 * Background Music Attribution:
 * Colorful Flowers by Tokyo Music Walker | https://soundcloud.com/user-356546060
 * Music promoted by https://www.chosic.com/free-music/all/
 * Creative Commons CC BY 3.0
 * https://creativecommons.org/licenses/by/3.0/
 */

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only once
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/Colorful-Flowers(chosic.com).mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(error => {
          console.log("Audio playback failed:", error);
        });
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const menuItems = [
    {
      name: "Wings",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&h=800&auto=format&fit=crop",
    },
    {
      name: "Loaded Fries",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&h=800&auto=format&fit=crop",
    },
    {
      name: "Daiquiris",
      image: "https://images.unsplash.com/photo-1486947799489-3fabdd7d32a6?q=80&w=800&h=800&auto=format&fit=crop",
    },
    {
      name: "Sliders",
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=800&h=800&auto=format&fit=crop",
    },
    {
      name: "And much more...",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&h=800&auto=format&fit=crop",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fbdf41]">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={toggleMute}
            className="p-3 bg-[#0645f9] rounded-full text-white hover:bg-opacity-90 transition-all"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
        
        <div className="relative w-[600px] mb-8">
          <Image
            src={"/images/crazy-legs-logo.png"}
            alt="Crazy Legs Logo"
            width={600}
            height={600}
            priority
            className="w-full h-auto"
            onError={(e) => {
              console.error("Error loading image:", e);
            }}
          />
        </div>
        <div className="animate-flash text-4xl md:text-7xl font-stencil text-white bg-[#0645f9] px-12 py-6 rounded-lg shadow-2xl transform hover:scale-105 transition-all border-4 border-white/20 backdrop-blur-sm mb-8 tracking-wider">
          COMING SOON
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#0645f9] text-center px-4 tracking-wide font-montserrat">
          Charlotte
        </h2>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0645f9] text-center mb-12 font-display">
          Menu Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#fbdf41] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            >
              <div className="relative w-full aspect-square rounded-lg mb-4 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0645f9] text-center font-display">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0645f9] mb-8 font-display">
            Stay Connected
          </h2>
          <p className="text-xl mb-8 text-[#0645f9]">
            crazylegs3llc@gmail.com
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-[#0645f9] hover:opacity-80 transition-opacity">
              <Instagram size={32} />
            </a>
            <a href="#" className="text-[#0645f9] hover:opacity-80 transition-opacity">
              <Facebook size={32} />
            </a>
            <a href="#" className="text-[#0645f9] hover:opacity-80 transition-opacity">
              <Twitter size={32} />
            </a>
          </div>
          <p className="text-lg text-[#0645f9]">
            Follow us for updates and announcements!
          </p>
        </div>
      </section>
    </main>
  );
}
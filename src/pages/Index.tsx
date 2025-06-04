
import { useState } from "react";
import { ArrowRight, Check, Star, Truck, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SkipCard from "@/components/SkipCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const skipSizes = [
  {
    id: 1,
    title: "4 Yard Skip",
    yards: "4 Yards",
    hirePeriod: "14 day hire period",
    price: "£211",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: false,
    roadRestrictions: false,
    description: "Perfect for small home projects and garden clearances"
  },
  {
    id: 2,
    title: "5 Yard Skip",
    yards: "5 Yards",
    hirePeriod: "14 day hire period",
    price: "£241",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: false,
    roadRestrictions: false,
    description: "Ideal for kitchen renovations and small building projects"
  },
  {
    id: 3,
    title: "6 Yard Skip",
    yards: "6 Yards",
    hirePeriod: "14 day hire period",
    price: "£264",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: true,
    roadRestrictions: false,
    description: "Most popular choice for home renovations"
  },
  {
    id: 4,
    title: "8 Yard Skip",
    yards: "8 Yards",
    hirePeriod: "14 day hire period",
    price: "£285",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: false,
    roadRestrictions: false,
    description: "Great for larger home projects and office clearances"
  },
  {
    id: 5,
    title: "10 Yard Skip",
    yards: "10 Yards",
    hirePeriod: "14 day hire period",
    price: "£315",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: false,
    roadRestrictions: true,
    description: "For large construction projects and major clearances"
  },
  {
    id: 6,
    title: "12 Yard Skip",
    yards: "12 Yards",
    hirePeriod: "14 day hire period",
    price: "£345",
    image: "/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png",
    popular: false,
    roadRestrictions: true,
    description: "Maximum capacity for commercial and industrial use"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <Hero />
      
      {/* Skip Selection Section with improved layout */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Choose Your Perfect Skip Size
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small garden clearances to major construction projects, we have the right skip size for every job. 
              All skips come with our 14-day hire period and professional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {skipSizes.map((skip, index) => (
              <SkipCard key={skip.id} skip={skip} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
};

export default Index;

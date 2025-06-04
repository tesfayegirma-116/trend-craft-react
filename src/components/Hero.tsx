
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-gray-700">Rated #1 Skip Hire Service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skip Hire
              </span>
              <br />
              <span className="text-gray-900">Made Simple</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Fast, reliable, and affordable skip hire for all your waste disposal needs. 
              Same-day delivery, competitive prices, and exceptional service guaranteed.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Same Day</div>
                <div className="text-sm text-gray-600">Delivery</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group">
                Get Instant Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-600">
                View Skip Sizes
              </Button>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative animate-fade-in delay-300">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/lovable-uploads/8c06f0d2-7c8c-4a9d-888c-96f617b71920.png"
                  alt="Skip Hire Service"
                  className="w-full h-auto rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Available Now</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-sm text-gray-600">Starting from</div>
                <div className="text-2xl font-bold text-blue-600">£211</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

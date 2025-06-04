
import { ArrowRight, AlertTriangle, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skip {
  id: number;
  title: string;
  yards: string;
  hirePeriod: string;
  price: string;
  image: string;
  popular: boolean;
  roadRestrictions: boolean;
  description: string;
}

interface SkipCardProps {
  skip: Skip;
  index: number;
}

const SkipCard = ({ skip, index }: SkipCardProps) => {
  return (
    <div className="group relative">
      {/* Background glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      
      <Card className={`relative overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-md rounded-3xl ${
        skip.popular ? 'ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/10 scale-105' : ''
      }`} style={{ animationDelay: `${index * 100}ms` }}>
        
        {/* Popular Badge with improved design */}
        {skip.popular && (
          <div className="absolute -top-2 -right-2 z-20">
            <div className="relative">
              <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur animate-pulse opacity-50"></div>
            </div>
          </div>
        )}

        {/* Road Restrictions with improved styling */}
        {skip.roadRestrictions && (
          <div className="absolute top-4 left-4 z-20">
            <div className="flex items-center space-x-1 bg-amber-100/90 backdrop-blur-sm text-amber-800 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-200/50">
              <AlertTriangle className="w-3 h-3" />
              <span>Permit Required</span>
            </div>
          </div>
        )}

        <CardContent className="p-0">
          {/* Enhanced Image Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full translate-y-12 -translate-x-12"></div>

            {/* Yard Badge with modern design */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/90 backdrop-blur-sm border border-blue-200/50 text-blue-700 font-bold px-4 py-2 rounded-2xl shadow-lg">
                {skip.yards}
              </div>
            </div>

            <div className="aspect-video relative group-hover:scale-110 transition-transform duration-700 overflow-hidden">
              <img
                src={skip.image}
                alt={skip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Floating action preview */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="p-8 space-y-6 bg-gradient-to-br from-white/95 to-blue-50/30">
            {/* Title and Description */}
            <div className="space-y-3">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                {skip.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">{skip.description}</p>
            </div>

            {/* Hire Period with modern styling */}
            <div className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200/50">
              <span className="text-sm font-medium text-slate-500">Hire Period</span>
              <span className="text-sm font-bold text-slate-700 flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                {skip.hirePeriod}
              </span>
            </div>

            {/* Modern Price and CTA Section */}
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  {skip.price}
                </div>
                <div className="text-xs text-slate-500 font-medium">Including VAT & Delivery</div>
              </div>

              {/* Enhanced CTA Button */}
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white group relative overflow-hidden rounded-2xl h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  Select This Skip
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>Fully Licensed</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkipCard;

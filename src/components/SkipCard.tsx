
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
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-200/50 to-slate-300/50 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <Card className={`relative overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-slate-200/60 bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl ${
        skip.popular ? 'ring-1 ring-blue-500/30 shadow-lg shadow-blue-500/5' : ''
      }`} style={{ animationDelay: `${index * 100}ms` }}>
        
        {/* Popular Badge - refined */}
        {skip.popular && (
          <div className="absolute -top-1.5 -right-1.5 z-20">
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
              <Sparkles className="w-3 h-3" />
              Popular
            </div>
          </div>
        )}

        {/* Road Restrictions - professional styling */}
        {skip.roadRestrictions && (
          <div className="absolute top-3 left-3 z-20">
            <div className="flex items-center space-x-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg text-xs font-medium border border-amber-200">
              <AlertTriangle className="w-3 h-3" />
              <span>Permit Required</span>
            </div>
          </div>
        )}

        <CardContent className="p-0">
          {/* Professional Image Section */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Yard Badge - clean design */}
            <div className="absolute top-3 right-3 z-10">
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-lg shadow-sm text-sm">
                {skip.yards}
              </div>
            </div>

            <div className="aspect-video relative group-hover:scale-[1.02] transition-transform duration-700 overflow-hidden">
              <img
                src={skip.image}
                alt={skip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Professional Content Section */}
          <div className="p-6 space-y-5">
            {/* Title and Description */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {skip.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{skip.description}</p>
            </div>

            {/* Hire Period - professional layout */}
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-medium text-slate-500">Hire Period</span>
              <span className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                {skip.hirePeriod}
              </span>
            </div>

            {/* Price and CTA - clean and professional */}
            <div className="space-y-4">
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-slate-900">
                  {skip.price}
                </div>
                <div className="text-xs text-slate-500 font-medium">Including VAT & Delivery</div>
              </div>

              {/* Minimalist Button */}
              <Button 
                className="w-full bg-slate-900 hover:bg-slate-800 text-white group relative overflow-hidden rounded-xl h-12 text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border-0"
                size="lg"
              >
                <span className="relative flex items-center justify-center gap-2">
                  Select This Skip
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </Button>
            </div>

            {/* Trust indicators - subtle and professional */}
            <div className="flex items-center justify-center gap-6 pt-1 text-xs text-slate-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
                <span>Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-500" />
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

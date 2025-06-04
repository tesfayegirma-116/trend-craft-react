
import { ArrowRight, AlertTriangle } from "lucide-react";
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
    <Card className={`group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-0 bg-white/70 backdrop-blur-sm ${
      skip.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''
    }`} style={{ animationDelay: `${index * 100}ms` }}>
      {/* Popular Badge */}
      {skip.popular && (
        <div className="absolute -top-1 -right-1 z-10">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </Badge>
        </div>
      )}

      {/* Road Restrictions Warning */}
      {skip.roadRestrictions && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center space-x-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
            <AlertTriangle className="w-3 h-3" />
            <span>Permit Required</span>
          </div>
        </div>
      )}

      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Yard Badge */}
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-blue-600 text-white font-bold px-3 py-1">
              {skip.yards}
            </Badge>
          </div>

          <div className="aspect-video relative group-hover:scale-110 transition-transform duration-700">
            <img
              src={skip.image}
              alt={skip.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{skip.title}</h3>
            <p className="text-sm text-gray-600">{skip.description}</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Hire Period:</span>
              <span className="text-sm font-medium text-gray-700">{skip.hirePeriod}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {skip.price}
                </div>
                <div className="text-sm text-gray-500">inc. VAT</div>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
              size="lg"
            >
              Select This Skip
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkipCard;


import { Truck, Clock, Shield, Star, Phone, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Same Day Delivery",
      description: "Quick turnaround times with skips delivered the same day you order, subject to availability.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Flexible Hire Period",
      description: "Standard 14-day hire period with options to extend if you need more time for your project.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "All our services are fully licensed and insured, giving you complete peace of mind.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Rated #1 by customers for reliability, punctuality, and exceptional customer service.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help with any questions or emergency requirements.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description: "We recycle up to 90% of waste collected, helping you dispose of waste responsibly.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose WasteAway?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our professional skip hire service. 
            We're committed to making waste disposal simple, reliable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

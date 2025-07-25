import { Check, Award, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import productsImage from "@/assets/products-hero.jpg";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "100% virgin human hair sourced ethically from trusted suppliers"
  },
  {
    icon: Heart,
    title: "Natural Beauty",
    description: "Enhancing your natural beauty with authentic textures and colors"
  },
  {
    icon: Sparkles,
    title: "Expert Craftsmanship",
    description: "Meticulously crafted by skilled artisans for perfect results"
  }
];

const benefits = [
  "Double-drawn hair for consistent thickness",
  "Cuticle-aligned for minimal tangling",
  "Chemical-free processing methods",
  "Available in various textures and lengths",
  "Long-lasting quality with proper care",
  "Natural shine and movement"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Miass Extension Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              For over a decade, Miass Extension has been dedicated to providing premium quality 
              natural hair extensions that enhance your beauty and boost your confidence. Our 
              commitment to excellence sets us apart in the industry.
            </p>

            {/* Features Grid */}
            <div className="grid gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="premium" size="lg">
              Learn Our Story
            </Button>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={productsImage}
                  alt="Premium Hair Products"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-premium">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-card p-6 rounded-2xl shadow-premium">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
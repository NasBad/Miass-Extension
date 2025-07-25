import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import bundlesImage from "@/assets/bundles-category.jpg";
import wigsImage from "@/assets/wigs-category.jpg";
import closuresImage from "@/assets/closures-category.jpg";

const categories = [
  {
    id: 1,
    title: "Hair Bundles",
    description: "Premium quality natural hair bundles in various textures and lengths",
    image: bundlesImage,
    link: "#bundles"
  },
  {
    id: 2,
    title: "Lace Wigs",
    description: "Beautiful lace front wigs with natural hairlines and stunning styles",
    image: wigsImage,
    link: "#wigs"
  },
  {
    id: 3,
    title: "Closures",
    description: "Perfect lace closures for a natural parting and seamless blend",
    image: closuresImage,
    link: "#closures"
  }
];

const CategorySection = () => {
  return (
    <section id="shop" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in max-w-2xl mx-auto">
            Discover our premium collection of natural hair extensions, wigs, and accessories
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-hover transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-background mb-2">
                  {category.title}
                </h3>
                <p className="text-background/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.description}
                </p>
                <Button
                  variant="elegant"
                  className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
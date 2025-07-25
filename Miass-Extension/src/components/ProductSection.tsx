import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import productsImage from "../assets/products-hero.jpg";

const products = [
  {
    id: 1,
    name: "Brazilian Straight Bundle",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    image: productsImage,
    category: "Bundles",
  },
  {
    id: 2,
    name: "Peruvian Curly Lace Wig",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.9,
    image: productsImage,
    category: "Wigs",
  },
  {
    id: 3,
    name: "Malaysian Body Wave",
    price: 94.99,
    originalPrice: 129.99,
    rating: 4.7,
    image: productsImage,
    category: "Bundles",
  },
  {
    id: 4,
    name: "HD Lace Closure",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.6,
    image: productsImage,
    category: "Closures",
  },
  {
    id: 5,
    name: "Indian Deep Wave",
    price: 99.99,
    originalPrice: 139.99,
    rating: 4.8,
    image: productsImage,
    category: "Bundles",
  },
  {
    id: 6,
    name: "Kinky Straight Wig",
    price: 149.99,
    originalPrice: 189.99,
    rating: 4.7,
    image: productsImage,
    category: "Wigs",
  },
];

const ProductSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in max-w-2xl mx-auto">
            Handpicked premium hair extensions loved by our customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  <Button size="icon" variant="premium" className="h-10 w-10">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="premium" className="h-10 w-10">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Sale Badge */}
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    SALE
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  variant="premium"
                  className="w-full mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                >
                  Add to Cart
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

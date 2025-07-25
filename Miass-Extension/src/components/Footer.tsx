import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Miass */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold bg-gradient-premium bg-clip-text text-transparent mb-4">
              Miass Extension
            </h3>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Premium natural hair extensions crafted with love and expertise.
              Enhancing your beauty, one strand at a time.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <div className="space-y-3">
              <a
                href="#home"
                className="block hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#shop"
                className="block hover:text-primary transition-colors"
              >
                Shop All
              </a>
              <a
                href="#bundles"
                className="block hover:text-primary transition-colors"
              >
                Hair Bundles
              </a>
              <a
                href="#wigs"
                className="block hover:text-primary transition-colors"
              >
                Lace Wigs
              </a>
              <a
                href="#closures"
                className="block hover:text-primary transition-colors"
              >
                Closures
              </a>
              <a
                href="#about"
                className="block hover:text-primary transition-colors"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">Support</h4>
            <div className="space-y-3">
              <a
                href="#contact"
                className="block hover:text-primary transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#shipping"
                className="block hover:text-primary transition-colors"
              >
                Shipping Info
              </a>
              <a
                href="#returns"
                className="block hover:text-primary transition-colors"
              >
                Returns & Exchanges
              </a>
              <a
                href="#care"
                className="block hover:text-primary transition-colors"
              >
                Hair Care Guide
              </a>
              <a
                href="#faq"
                className="block hover:text-primary transition-colors"
              >
                FAQ
              </a>
              <a
                href="#size-guide"
                className="block hover:text-primary transition-colors"
              >
                Size Guide
              </a>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-lg font-semibold mb-4 text-primary">
              Stay Connected
            </h4>
            <p className="text-secondary-foreground/80 mb-4">
              Subscribe for exclusive offers and hair care tips
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button variant="premium" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+972508681550</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>miassextension@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Kafr Yasif, IL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
              © 2024 Miass Extension. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

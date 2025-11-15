import { Button } from "@/components/ui/button";
import vynsLogo from "@/assets/vyns-logo.svg";
import vynsAirHero from "@/assets/vyns-air-hero.jpg";
import { ShoppingCart } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      <div className="relative container mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-12rem)]">
          {/* Left side - Logo and text */}
          <div className="space-y-8 animate-fade-in">
            {/* Bold Logo */}
            <div className="space-y-4">
              <img 
                src={vynsLogo} 
                alt="Vyns - Where Health Meets Wealth" 
                className="w-48 lg:w-64 h-auto object-contain"
              />
            </div>

            {/* Product name */}
            <div className="space-y-2">
              <p className="text-sm lg:text-base text-muted-foreground font-light tracking-wide">
                Vyns Air
              </p>
              <div className="h-px w-12 bg-gold" />
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-7xl font-light leading-tight">
                <span className="block text-foreground">Sleeker.</span>
                <span className="block text-foreground">Smarter.</span>
                <span className="block font-display italic text-gradient">Made for you.</span>
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl font-light text-muted-foreground">
              Where Health Meets Wealth
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base"
              >
                Discover Vyns Air
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary text-foreground font-medium px-8 py-6 text-base"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Pre-Order Now
              </Button>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className="relative lg:pl-12 animate-slide-in-right">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-transparent to-transparent blur-3xl" />
              <img 
                src={vynsAirHero}
                alt="Vyns Air smart ring"
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
              {/* Accent glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gold/30 rounded-full blur-[100px] animate-glow" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

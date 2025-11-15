import { Button } from "@/components/ui/button";
import vynsLogo from "@/assets/vyns-logo.svg";
import vynsRing from "@/assets/vyns-ring.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative container mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left content */}
          <div className="space-y-10 animate-fade-in">
            
            {/* Logo - no glow */}
            <div className="relative inline-block">
              <img 
                src={vynsLogo} 
                alt="Vyns - Where Health Meets Wealth" 
                className="relative w-48 lg:w-56 h-auto object-contain invert"
              />
            </div>

            {/* Main headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.1] tracking-tight">
                <span className="block text-foreground font-serif">crafted for the</span>
                <span className="block text-foreground font-serif">healthworthy</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-lg lg:text-xl font-light text-muted-foreground max-w-lg leading-relaxed">
              VYNS is a members-only club that enables the trustworthy to make health progress
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="group relative bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-6 text-sm rounded-lg transition-all hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  discover VYNS
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground font-light">
              <div>✓ Free shipping worldwide</div>
              <div>✓ 60-day trial</div>
              <div>✓ 2-year warranty</div>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            <div className="relative w-full max-w-[160rem]">
              
              {/* Product image - clean, no effects */}
              <img 
                src={vynsRing}
                alt="VYNS smart ring - Premium health tracking device"
                className="relative w-full h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

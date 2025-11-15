import { Button } from "@/components/ui/button";
import vynsLogo from "@/assets/vyns-logo.svg";
import vynsAirHero from "@/assets/vyns-air-hero.jpg";
import { ShoppingCart, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--gold)/0.08),transparent_50%),radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.06),transparent_50%)]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative container mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[calc(100vh-12rem)]">
          
          {/* Left content */}
          <div className="space-y-10 animate-fade-in">
            
            {/* Logo with glow effect */}
            <div className="relative inline-block">
              <div className="absolute inset-0 blur-3xl bg-gold/20 rounded-full" />
              <img 
                src={vynsLogo} 
                alt="Vyns - Where Health Meets Wealth" 
                className="relative w-64 lg:w-80 h-auto object-contain"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-foreground">Introducing Vyns Air</span>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-light leading-[1.1] tracking-tight">
                <span className="block text-foreground">The Ring</span>
                <span className="block text-foreground">That Knows</span>
                <span className="block font-display italic text-gradient glow-text">Everything.</span>
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl font-light text-muted-foreground max-w-lg leading-relaxed">
              Where <span className="text-gold font-medium">Health</span> Meets <span className="text-gold font-medium">Wealth</span>. 
              Track your vitals, optimize your life.
            </p>

            {/* Features list */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>7-day battery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Waterproof design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span>Medical-grade sensors</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-10 py-7 text-base rounded-2xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discover Vyns Air
                  <Zap className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="glass-card border-2 hover:bg-secondary/50 text-foreground font-medium px-10 py-7 text-base rounded-2xl transition-all hover:scale-[1.02]"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Pre-Order Now
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-4 text-xs text-muted-foreground">
              <div>✓ Free shipping worldwide</div>
              <div>✓ 60-day trial</div>
              <div>✓ 2-year warranty</div>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="relative lg:pl-16 animate-slide-in-right">
            <div className="relative">
              
              {/* Glowing orb background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                <div className="absolute inset-0 bg-gold/30 rounded-full blur-[120px] animate-glow" />
                <div className="absolute inset-0 bg-gold-light/20 rounded-full blur-[100px] animate-pulse" />
              </div>

              {/* Glass card container */}
              <div className="relative glass-card rounded-3xl p-8 lg:p-12">
                <div className="relative aspect-square lg:h-[600px]">
                  
                  {/* Product image with enhanced effects */}
                  <img 
                    src={vynsAirHero}
                    alt="Vyns Air smart ring - Premium health tracking device"
                    className="relative w-full h-full object-contain ring-glow animate-float"
                  />
                  
                  {/* Floating info cards */}
                  <div className="absolute top-8 -left-4 glass-card px-4 py-3 rounded-2xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="text-xs text-muted-foreground">Heart Rate</div>
                    <div className="text-2xl font-semibold text-gold">72 BPM</div>
                  </div>
                  
                  <div className="absolute bottom-8 -right-4 glass-card px-4 py-3 rounded-2xl animate-fade-in" style={{ animationDelay: '0.7s' }}>
                    <div className="text-xs text-muted-foreground">Sleep Score</div>
                    <div className="text-2xl font-semibold text-gold">94%</div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-24 h-24 border border-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-gold/10 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

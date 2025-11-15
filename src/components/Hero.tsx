import { Button } from "@/components/ui/button";
import vynsAirLogo from "@/assets/vyns-air-logo.svg";
import vynsRing from "@/assets/vyns-ring.png";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative container mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-24 items-center min-h-[calc(100vh-12rem)]">
          {/* Left content */}
          <div className="flex flex-col gap-6 lg:gap-8 animate-fade-in order-1 lg:order-1">
            {/* Main headline - 30% bigger */}
            <div>
              <h1 className="text-[4.225rem] lg:text-[5.07rem] xl:text-[5.915rem] font-light leading-[1.1] tracking-tight">
                <span className="block text-foreground font-serif">the future of</span>
                <span className="block text-foreground font-serif whitespace-nowrap">fit-finances</span>
              </h1>
            </div>

            {/* Product showcase - Mobile only */}
            <div className="relative flex items-center justify-center lg:hidden order-2">
              <div className="relative w-full max-w-[160rem]">
                <img src={vynsRing} alt="VYNS smart ring - Premium health tracking device" className="relative w-full h-auto object-contain animate-float" />
              </div>
            </div>

            {/* Vyns Air Logo */}
            <div className="relative inline-block order-3">
              
            </div>

            {/* Tagline */}
            <p className="text-lg lg:text-xl font-light text-muted-foreground max-w-lg leading-relaxed order-4">
              Introducing Vyns ~air for frictionless payments<br />and healthier decisions
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 order-5">
              <Button size="lg" className="group relative bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-6 text-sm rounded-lg transition-all hover:scale-[1.02]">
                <span className="relative z-10 flex items-center gap-2">
                  discover VYNS
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-xs text-muted-foreground font-light order-6">
              <div>✓ Free shipping worldwide</div>
              <div>✓ 60-day trial</div>
              <div>✓ 2-year warranty</div>
            </div>
          </div>

          {/* Right side - Product showcase Desktop */}
          <div className="hidden lg:flex relative items-center justify-center animate-slide-in-right order-2">
            <div className="relative w-full max-w-[160rem]">
              <img src={vynsRing} alt="VYNS smart ring - Premium health tracking device" className="relative w-full h-auto object-contain animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
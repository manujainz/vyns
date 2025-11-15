import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-xl font-light tracking-[0.3em] text-foreground">
            VYNS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Technology
            </a>
            <a href="#lifestyle" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Lifestyle
            </a>
            <a href="#community" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground">
              Pre-Order
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-foreground">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

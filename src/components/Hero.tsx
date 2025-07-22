import { Button } from "@/components/ui/button";
import { Shield, Lock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-lighter/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-sage-lighter px-4 py-2 rounded-full text-sage font-medium text-sm mb-6">
              <Heart className="w-4 h-4" />
              Your trusted financial saheli
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Financial Support,{" "}
              <span className="text-sage">the Saheli Way</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl lg:max-w-none">
              A safe, private space for women to plan their financial future during life's most challenging moments. From divorce to job loss — we're here to help you regain control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                Start Your Journey
              </Button>
              <Button size="lg" variant="warm" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-sage" />
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-sage" />
                <span>Secure & Anonymous</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="Empowered woman planning her financial future" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-warm rounded-full shadow-glow opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-sage-light rounded-full shadow-soft opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
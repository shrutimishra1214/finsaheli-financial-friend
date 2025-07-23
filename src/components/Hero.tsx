import { Button } from "@/components/ui/button";
import { Shield, Lock, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image-indian.jpg";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-lighter/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-pink-lighter px-4 py-2 rounded-full text-pink font-medium text-sm mb-6">
              <Heart className="w-4 h-4" />
              आपकी विश्वसनीय सहेली
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              वित्तीय सशक्तिकरण,{" "}
              <span className="text-pink">सहेली के साथ</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl lg:max-w-none">
              महिलाओं के लिए एक सुरक्षित और निजी स्थान जहां वे अपने वित्तीय भविष्य की योजना बना सकती हैं। तलाक से लेकर नौकरी खोने तक - हम आपके साथ हैं।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                variant="feminine" 
                className="text-lg px-8 py-4"
                onClick={() => navigate('/chat')}
              >
                अपनी यात्रा शुरू करें
              </Button>
              <Button size="lg" variant="pink" className="text-lg px-8 py-4">
                और जानें
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-pink" />
                <span>100% निजी</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-pink" />
                <span>सुरक्षित और गुमनाम</span>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <img 
                src={heroImage} 
                alt="सशक्त भारतीय महिला अपने वित्तीय भविष्य की योजना बनाते हुए" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-pink rounded-full shadow-glow opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-purple-light rounded-full shadow-soft opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
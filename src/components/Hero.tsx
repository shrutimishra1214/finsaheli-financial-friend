import { Button } from "@/components/ui/button";
import { Shield, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image-indian.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-to-br from-sage-lighter/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium text-sm mb-6">
              <Shield className="w-4 h-4" />
              <span className="font-hindi">{t('hero.certified')}</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight font-hindi">
              {t('hero.title')}{" "}
              <span className="text-blue-600">{t('hero.titleHighlight')}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl lg:max-w-none font-hindi">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                variant="default" 
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 font-hindi"
                onClick={() => navigate('/chat')}
              >
                {t('hero.startConsultation')}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-hindi">
                {t('hero.moreInfo')}
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="font-hindi">{t('hero.confidential')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <span className="font-hindi">{t('hero.bankSecured')}</span>
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-glow opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-200 rounded-full shadow-soft opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
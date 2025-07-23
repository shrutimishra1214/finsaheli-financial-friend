import { Heart, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-feminine rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">फिनसहेली</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              विश्वसनीय, निजी मार्गदर्शन के माध्यम से महिलाओं को वित्तीय स्वतंत्रता के साथ सशक्त बनाना।
            </p>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">सहायता</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">यह कैसे काम करता है</a></li>
              <li><a href="#" className="hover:text-background transition-colors">गोपनीयता नीति</a></li>
              <li><a href="#" className="hover:text-background transition-colors">सुरक्षा</a></li>
              <li><a href="#" className="hover:text-background transition-colors">पूछे जाने वाले प्रश्न</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">संसाधन</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">वित्तीय योजना</a></li>
              <li><a href="#" className="hover:text-background transition-colors">कानूनी सहायता</a></li>
              <li><a href="#" className="hover:text-background transition-colors">मानसिक स्वास्थ्य</a></li>
              <li><a href="#" className="hover:text-background transition-colors">संकट सहायता</a></li>
            </ul>
          </div>
          
          {/* Emergency */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">आपातकालीन सहायता</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <span>181 - महिला हेल्पलाइन</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Shield className="w-4 h-4" />
                <span>100 - पुलिस आपातकाल</span>
              </div>
              <Button variant="safe" size="sm" className="w-full mt-4">
                तुरंत साइट से निकलें
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 फिनसहेली। गोपनीयता और देखभाल के साथ महिलाओं की वित्तीय स्वतंत्रता का समर्थन।
          </p>
          <div className="flex items-center gap-4 text-sm text-background/70">
            <span>बनाया गया है</span>
            <Heart className="w-4 h-4 text-pink" />
            <span>हर सहेली के लिए</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
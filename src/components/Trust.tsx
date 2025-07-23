import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Eye, Lock, UserX } from "lucide-react";

const Trust = () => {
  const navigate = useNavigate();
  const trustFeatures = [
    {
      icon: Shield,
      title: "पूर्ण एन्क्रिप्शन",
      description: "सैन्य-ग्रेड सुरक्षा हर बातचीत और डेटा को सुरक्षित रखती है।"
    },
    {
      icon: Eye,
      title: "कोई डेटा स्टोरेज नहीं",
      description: "बातचीत डिफ़ॉल्ट रूप से संग्रहीत नहीं होती। आपका डेटा आपके नियंत्रण में है।"
    },
    {
      icon: UserX,
      title: "पूर्ण गुमनामी",
      description: "अपनी पहचान या व्यक्तिगत विवरण बताए बिना फिनसहेली का उपयोग करें।"
    },
    {
      icon: Lock,
      title: "गुप्त पहुंच",
      description: "त्वरित-निकास सुविधा और साझा डिवाइस के लिए पासकोड सुरक्षा।"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              आपका विश्वास हमारी <span className="text-pink">नींव</span> है
            </h2>
            <p className="text-xl text-muted-foreground">
              संकट के समय में, गोपनीयता केवल एक सुविधा नहीं — यह जीवनरेखा है
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-lighter flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-warm text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              नियंत्रण अपने हाथ में लेने के लिए तैयार हैं?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              आपकी वित्तीय स्वतंत्रता की यात्रा एक बातचीत से शुरू होती है। सुरक्षित, निजी, और बिना किसी जजमेंट के।
            </p>
            <Button 
              size="lg" 
              variant="feminine" 
              className="text-lg px-8 py-4"
              onClick={() => navigate('/chat')}
            >
              अभी बात करना शुरू करें
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
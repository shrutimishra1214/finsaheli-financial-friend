import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, MapPin, Users, Calculator, AlertTriangle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "आपकी सहेली चैटबॉट",
      description: "गर्मजोशी भरी बातचीत जो आपकी परिस्थिति को समझती है और संवेदना के साथ मार्गदर्शन करती है।",
      color: "pink"
    },
    {
      icon: ShieldCheck,
      title: "गोपनीयता सबसे पहले",
      description: "पूर्ण गुमनामी, बिना रजिस्ट्रेशन, और साझा डिवाइस के लिए गुप्त मोड। आपके राज आपके ही रहते हैं।",
      color: "purple"
    },
    {
      icon: Calculator,
      title: "स्मार्ट वित्तीय योजना",
      description: "छुपी संपत्ति का आकलन, आपातकालीन फंड बनाना, और वित्तीय स्वतंत्रता के लिए योजना।",
      color: "pink"
    },
    {
      icon: Users,
      title: "सहायता नेटवर्क",
      description: "स्थानीय कानूनी सहायता, महिला आश्रय, और परामर्श सेवाओं से तुरंत जुड़ाव।",
      color: "purple"
    },
    {
      icon: AlertTriangle,
      title: "संकट सुविधाएं",
      description: "आपातकालीन त्वरित-निकास बटन, सुरक्षित पासकोड सुरक्षा, और तत्काल वित्तीय सहायता।",
      color: "pink"
    },
    {
      icon: MapPin,
      title: "स्थानीय संसाधन",
      description: "भारत भर में महिला-केंद्रित वित्तीय और कानूनी संसाधनों का व्यापक डेटाबेस।",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            आपकी <span className="text-pink">सुरक्षा</span> और <span className="text-purple">सफलता</span> के लिए बनाया गया
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            हर सुविधा महिलाओं की विशिष्ट वित्तीय चुनौतियों को ध्यान में रखकर डिज़ाइन की गई है
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  feature.color === 'pink' ? 'bg-pink-lighter' : 'bg-purple-lighter'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'pink' ? 'text-pink' : 'text-purple'
                  }`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
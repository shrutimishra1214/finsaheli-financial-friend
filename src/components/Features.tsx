import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ShieldCheck, MapPin, Users, Calculator, AlertTriangle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Saheli Chatbot",
      description: "Warm, conversational AI that understands your unique situation and guides you with empathy and care.",
      color: "sage"
    },
    {
      icon: ShieldCheck,
      title: "Privacy First",
      description: "Complete anonymity, no mandatory sign-up, and discreet mode for shared devices. Your secrets stay yours.",
      color: "warm"
    },
    {
      icon: Calculator,
      title: "Smart Financial Planning",
      description: "Assess hidden assets, build emergency funds, and create custom roadmaps for your financial independence.",
      color: "sage"
    },
    {
      icon: Users,
      title: "Support Network",
      description: "Real-time connections to local legal aid, shelters, and counseling services tailored to your location.",
      color: "warm"
    },
    {
      icon: AlertTriangle,
      title: "Crisis Features",
      description: "Emergency quick-exit button, secure passcode protection, and guidance for urgent financial situations.",
      color: "sage"
    },
    {
      icon: MapPin,
      title: "Local Resources",
      description: "Comprehensive database of women-focused financial and legal resources across India and beyond.",
      color: "warm"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Built for <span className="text-sage">Your Safety</span> & <span className="text-sage">Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with women's unique financial challenges in mind
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
                  feature.color === 'sage' ? 'bg-sage-lighter' : 'bg-warm'
                }`}>
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'sage' ? 'text-sage' : 'text-foreground'
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
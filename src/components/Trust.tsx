import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Lock, UserX } from "lucide-react";

const Trust = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Military-grade security protects every conversation and data point."
    },
    {
      icon: Eye,
      title: "No Data Storage",
      description: "Conversations aren't stored by default. You control your information."
    },
    {
      icon: UserX,
      title: "Complete Anonymity",
      description: "Use FinSaheli without revealing your identity or personal details."
    },
    {
      icon: Lock,
      title: "Discreet Access",
      description: "Quick-exit features and passcode protection for shared devices."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your Trust is <span className="text-sage">Our Foundation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              In times of crisis, privacy isn't just a feature — it's a lifeline
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {trustFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-sage-lighter flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-sage" />
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
              Ready to Take Control?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Your financial independence journey starts with a single conversation. Safe, private, and judgment-free.
            </p>
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Start Chatting Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
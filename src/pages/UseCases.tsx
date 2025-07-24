import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShieldCheck, Calculator, Coins, HandHeart, GraduationCap, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import communityImage from "../assets/community-meeting.png";

const UseCases = () => {
  const navigate = useNavigate();

  const cases = [
    {
      icon: Calculator,
      title: "Daily Expense Management",
      description: "Learn how to track household expenses, create simple budgets, and save money from daily activities. We'll help you understand basic financial planning without any complex terms.",
      example: "See how Lakshmi, a homemaker, learned to save ₹2000 monthly by tracking her daily expenses."
    },
    {
      icon: Coins,
      title: "Small Business Support",
      description: "Get guidance on starting small businesses like tailoring, food service, or local shops. Learn about basic bookkeeping and managing business money separately from household expenses.",
      example: "Read about Meena, who started a small tiffin service and learned to manage her business finances."
    },
    {
      icon: HandHeart,
      title: "Emergency Planning",
      description: "Learn how to build an emergency fund, even with a limited income. Get information about government schemes and support systems available during financial emergencies.",
      example: "Discover how Radha created a safety net for her family by saving small amounts regularly."
    },
    {
      icon: GraduationCap,
      title: "Children's Education",
      description: "Understand various government schemes for children's education, scholarship programs, and how to plan for your children's future education expenses.",
      example: "Learn from Sunita's story of planning her daughter's education through government schemes."
    },
    {
      icon: Home,
      title: "Housing Support",
      description: "Information about government housing schemes, basic home loans, and how to manage housing-related expenses. Get guidance on tenant rights and rental agreements.",
      example: "See how Anjali navigated government housing schemes to secure a home for her family."
    },
    {
      icon: ShieldCheck,
      title: "Financial Safety",
      description: "Learn about safe banking practices, how to protect yourself from fraud, and basic rights as a banking customer. Get information about women-specific government schemes.",
      example: "Read how Priya learned to use banking services safely and securely."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border p-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">How We Can Help You</h1>
              <p className="text-sm text-muted-foreground">Real solutions for real needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Hero Section with Background Image */}
        <div className="relative h-[400px] mb-16">
          <div className="absolute inset-0">
            <img 
              src={communityImage}
              alt="Women's community meeting for financial education" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"></div>
          </div>
          <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
              Simple Solutions for Your Financial Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We provide easy-to-understand guidance and support for your daily financial needs
            </p>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((item, index) => (
                <Card key={index} className="border-0 shadow-soft bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-purple-lighter flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <p className="text-sm text-purple border-t border-border/50 pt-4 mt-4">
                          {item.example}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-warm text-center mt-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Our financial assistant is here to help you 24/7. All conversations are private and secure.
              </p>
              <Button 
                size="lg" 
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => navigate('/chat')}
              >
                Start Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases; 
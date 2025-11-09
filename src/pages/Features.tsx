import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wallet,
  Send,
  Download,
  Upload,
  Shield,
  Smartphone,
  CreditCard,
  BarChart3,
  Bell,
  Clock,
  Users,
  Lock,
  Zap,
  FileText,
  Globe,
  Headphones
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Send,
      title: "Instant Money Transfer",
      description: "Send money to anyone instantly using their phone number or email address. No delays, no hassle."
    },
    {
      icon: Download,
      title: "Cash Out Anytime",
      description: "Withdraw your funds at any of our 50,000+ agent locations or directly to your bank account."
    },
    {
      icon: Upload,
      title: "Easy Cash In",
      description: "Add money to your wallet through our agent network, bank transfers, or card payments."
    },
    {
      icon: CreditCard,
      title: "Bill Payments",
      description: "Pay utility bills, mobile recharges, and merchant payments directly from your wallet."
    },
    {
      icon: BarChart3,
      title: "Transaction History",
      description: "Track all your transactions with detailed history, receipts, and spending analytics."
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Get instant alerts for every transaction, ensuring you're always in control of your money."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access your wallet anytime, anywhere. Our platform is always available when you need it."
    },
    {
      icon: Users,
      title: "Agent Network",
      description: "Nationwide network of verified agents for convenient cash in and cash out services."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Multi-factor authentication, encryption, and fraud detection keep your money safe."
    },
    {
      icon: Lock,
      title: "Privacy Protection",
      description: "Your personal and financial data is encrypted and never shared without your consent."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Process transactions in seconds with our optimized payment infrastructure."
    },
    {
      icon: FileText,
      title: "Digital Receipts",
      description: "Get instant digital receipts for every transaction, accessible anytime from your dashboard."
    },
    {
      icon: Globe,
      title: "Multi-Platform Access",
      description: "Use PayFlow on web, mobile, or tablet with seamless synchronization across devices."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Designed mobile-first for the best experience on smartphones and tablets."
    },
    {
      icon: BarChart3,
      title: "Financial Insights",
      description: "Understand your spending patterns with detailed analytics and visual reports."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you with any questions or issues."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Powerful Features</h1>
            <p className="text-lg text-white/90">
              Everything you need to manage your money, all in one secure platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4 group-hover:shadow-glow transition-shadow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience All Features Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sign up now and get instant access to all premium features at no cost
            </p>
            <Link to="/register">
              <Button variant="accent" size="xl">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Wallet,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Lock,
  Smartphone,
  CreditCard,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your money and data are protected with military-grade encryption and multi-factor authentication.",
    },
    {
      icon: Zap,
      title: "Instant Transfers",
      description:
        "Send and receive money in seconds with our lightning-fast transaction processing system.",
    },
    {
      icon: Users,
      title: "Agent Network",
      description:
        "Cash in and cash out at thousands of verified agent locations nationwide.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description:
        "Access your wallet anytime, anywhere with our intuitive mobile-optimized platform.",
    },
    {
      icon: CreditCard,
      title: "Multiple Payment Options",
      description:
        "Link your bank account, debit cards, or credit cards for seamless transactions.",
    },
    {
      icon: TrendingUp,
      title: "Financial Insights",
      description:
        "Track your spending, monitor transactions, and get insights into your financial habits.",
    },
  ];

  const stats = [
    { value: "5M+", label: "Active Users" },
    { value: "$2B+", label: "Transaction Volume" },
    { value: "50K+", label: "Agent Locations" },
    { value: "99.9%", label: "Uptime" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Wallet className="h-4 w-4" />
              <span>Trusted by millions worldwide</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Money, Simplified
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the future of digital payments. Send money, pay bills,
              and manage your finances with ease and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="accent" size="xl" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/features">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make your financial life easier and
              more secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4 group-hover:shadow-glow transition-shadow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join millions of users who trust PayFlow for their daily
              transactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold mx-auto mb-4 shadow-glow">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-muted-foreground">
                Sign up in minutes with just your email and phone number
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold mx-auto mb-4 shadow-glow">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Add Money</h3>
              <p className="text-muted-foreground">
                Link your bank account or visit any agent to load your wallet
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-white text-2xl font-bold mx-auto mb-4 shadow-glow">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Transacting</h3>
              <p className="text-muted-foreground">
                Send money, pay bills, and enjoy seamless digital payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero border-0 shadow-2xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <Lock className="h-12 w-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join millions of satisfied users and experience the future of
                digital payments today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button
                    variant="accent"
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    Create Free Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="xl"
                    className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

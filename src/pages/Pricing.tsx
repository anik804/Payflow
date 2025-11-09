import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Personal",
      description: "Perfect for individuals",
      price: "Free",
      features: [
        "Send & receive money instantly",
        "Pay bills and mobile recharge",
        "Transaction history",
        "Basic customer support",
        "Digital receipts",
        "Up to $10,000 monthly limit"
      ]
    },
    {
      name: "Business",
      description: "For small businesses",
      price: "$9.99/mo",
      popular: true,
      features: [
        "Everything in Personal",
        "Unlimited transaction limit",
        "Priority customer support",
        "Advanced analytics",
        "Multiple user accounts",
        "API access",
        "Dedicated account manager"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      features: [
        "Everything in Business",
        "Custom integrations",
        "Dedicated infrastructure",
        "24/7 premium support",
        "Custom fee structure",
        "Compliance assistance",
        "Training & onboarding"
      ]
    }
  ];

  const fees = [
    { service: "Send Money (to users)", fee: "Free" },
    { service: "Cash In (at agent)", fee: "1% + $0.50" },
    { service: "Cash Out (at agent)", fee: "1.5% + $0.50" },
    { service: "Bank Transfer Out", fee: "$2.00 flat" },
    { service: "Bill Payment", fee: "Free" },
    { service: "Card Payment In", fee: "2.5% + $0.30" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-white/90">
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : 'border-2'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {plan.description}
                  </CardDescription>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {plan.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/register" className="block">
                    <Button 
                      variant={plan.popular ? "accent" : "default"}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Transaction Fees</h2>
            <p className="text-center text-muted-foreground mb-8">
              Transparent fees for all our services
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {fees.map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between items-center py-3 border-b last:border-0"
                    >
                      <span className="font-medium">{item.service}</span>
                      <span className="text-primary font-semibold">{item.fee}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Visit our FAQ page or contact our support team for more information
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/faq">
                <Button variant="default" size="lg">
                  View FAQ
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

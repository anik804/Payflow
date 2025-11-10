import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Wallet } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-green-600 min-h-[80vh] flex items-center text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-green-100 text-sm font-medium">
              <Wallet className="h-4 w-4 text-white" />
              <span>Simple, Transparent & Fair</span>
            </div>

            <h1 className="text-5xl font-extrabold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Choose the plan that fits your needs — no hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section> */}
      {/* Hero Section */}
<section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-500 to-purple-700 min-h-[80vh] flex items-center text-white">
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
  <div className="absolute inset-0 bg-black/20" /> {/* subtle overlay for text contrast */}

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-green-50 text-sm font-medium">
        <Wallet className="h-4 w-4 text-white" />
        <span>Simple, Transparent & Fair</span>
      </div>

      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Simple, Transparent Pricing
      </h1>
      <p className="text-lg text-white/90 max-w-2xl mx-auto">
        Choose the plan that fits your needs — no hidden fees, no surprises.
      </p>
    </motion.div>
  </div>
</section>


      {/* Pricing Plans */}
      <section className="py-24 bg-gradient-to-t from-white via-purple-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className={`relative rounded-2xl backdrop-blur-md border-2 transition-all duration-300 ${
                    plan.popular
                      ? "border-green-500 shadow-xl bg-white/90"
                      : "border-purple-200 bg-white/70 hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2 text-purple-900">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-base mb-4 text-purple-700/80">
                      {plan.description}
                    </CardDescription>
                    <div className="text-4xl font-bold text-green-600 mb-4">
                      {plan.price}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-purple-800/80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/register" className="block">
                      <Button
                        variant={plan.popular ? "accent" : "default"}
                        className={`w-full font-semibold text-base py-5 rounded-xl ${
                          plan.popular
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : "bg-purple-100 hover:bg-purple-200 text-purple-800"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Fees */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Transaction Fees</h2>
            <p className="text-purple-700/80">
              Transparent and fair pricing for all services
            </p>
          </div>
          <Card className="rounded-2xl border-purple-200 bg-white/80 backdrop-blur-md shadow-md">
            <CardContent className="p-6">
              <div className="space-y-4">
                {fees.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-purple-100 last:border-0"
                  >
                    <span className="font-medium text-purple-800">{item.service}</span>
                    <span className="text-green-600 font-semibold">{item.fee}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold mb-4">
              Have Questions?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Visit our FAQ page or contact our support team for more information.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/faq">
                <Button
                  size="xl"
                  className="bg-white text-green-600 font-semibold px-8 py-6 rounded-xl hover:bg-purple-100 transition-all duration-300"
                >
                  View FAQ
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="xl"
                  className="border-2 border-white text-white bg-transparent font-semibold px-8 py-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

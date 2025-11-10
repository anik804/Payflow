import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CreditCard,
  Lock,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Your money protected with military-grade encryption and multi-factor authentication.",
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
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-200 to-purple-100 py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 backdrop-blur-sm border border-green-400/30 text-green-700 text-sm font-medium mb-6"
            >
              <Wallet className="h-4 w-4 text-green-600" />
              <span>Trusted by millions worldwide</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6">
              Your Money, Simplified
            </h1>

            <p className="text-lg sm:text-xl text-purple-700/80 mb-8 max-w-2xl mx-auto">
              Experience the future of digital payments. Send money, pay bills,
              and manage your finances with ease and security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Gradient primary button */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 0px 20px rgba(34,197,94,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to="/register">
                  <Button
                    size="xl"
                    className="relative w-full sm:w-56 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 text-white font-semibold rounded-xl px-8 py-6 shadow-lg hover:shadow-green-300/40 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/0 via-green-500/10 to-emerald-500/0 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </motion.div>

              {/* Outline secondary button */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0px 0px 20px rgba(168,85,247,0.4)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Link to="/features">
                  <Button
                    size="xl"
                    variant="outline"
                    className="relative w-full sm:w-56 bg-white/40 text-purple-800 border border-purple-300 font-semibold rounded-xl px-8 py-6 backdrop-blur-md hover:bg-purple-200/60 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Learn More
                    </span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-200/0 via-purple-300/20 to-purple-400/0 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-50 border-y border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-purple-700">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-t from-purple-50 via-white to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg text-purple-700/80 max-w-2xl mx-auto">
              Powerful features designed to make your financial life easier and
              more secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 border-purple-200 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="">
                    <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-green-500 to-green-600 mb-4 shadow-md">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-purple-900 text-xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-purple-700/80 text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-32 bg-purple-100/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-purple-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-lg text-purple-700/80 max-w-2xl mx-auto">
              Join millions of users who trust PayFlow for their daily
              transactions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-2xl font-bold mx-auto mb-4 shadow-md">
                  {step}
                </div>
                <h3 className="text-xl font-semibold text-purple-900 mb-2">
                  {["Create Account", "Add Money", "Start Transacting"][i]}
                </h3>
                <p className="text-purple-700/80">
                  {
                    [
                      "Sign up in minutes with just your email and phone number.",
                      "Link your bank account or visit any agent to load your wallet.",
                      "Send money, pay bills, and enjoy seamless digital payments.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 lg:py-32 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-transparent border-0 text-center shadow-none">
              <CardContent className="p-8 lg:p-12">
                <Lock className="h-12 w-12 text-white mx-auto mb-6" />
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  Join millions of satisfied users and experience the future of
                  digital payments today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/register">
                      <Button
                        variant="accent"
                        size="xl"
                        className="w-full sm:w-auto bg-white text-green-600 hover:bg-purple-100"
                      >
                        Create Free Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/contact">
                      <Button
                        variant="outline"
                        size="xl"
                        className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/20"
                      >
                        Contact Sales
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section> */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-500 via-emerald-600 to-purple-700 text-white overflow-hidden">
        {/* Decorative background overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-transparent border-0 text-center shadow-none">
              <CardContent className="p-8 lg:p-12">
                <Lock className="h-12 w-12 text-white mx-auto mb-6 drop-shadow-lg" />
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join millions of satisfied users and experience the future of
                  digital payments today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  {/* Primary Button */}
                  <motion.div
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.3)",
                    }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link to="/register">
                      <Button
                        size="xl"
                        className="relative w-full sm:w-60 bg-white text-green-600 font-semibold rounded-xl px-8 py-6 hover:bg-gradient-to-r hover:from-green-400 hover:to-emerald-500 hover:text-white transition-all duration-300 shadow-lg"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Create Free Account
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/0 via-white/20 to-green-400/0 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </Link>
                  </motion.div>

                  {/* Secondary Button */}
                  <motion.div
                    whileHover={{
                      scale: 1.07,
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.25)",
                    }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Link to="/contact">
                      <Button
                        size="xl"
                        variant="outline"
                        className="relative w-full sm:w-60 border-2 border-white/80 bg-white/10 text-white font-semibold rounded-xl px-8 py-6 hover:bg-white/20 backdrop-blur-md transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Contact Sales
                        </span>
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-300/0 via-purple-400/20 to-purple-300/0 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

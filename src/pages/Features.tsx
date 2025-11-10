import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bell,
  Clock,
  CreditCard,
  Download,
  FileText,
  Globe,
  Headphones,
  Lock,
  Send,
  Shield,
  Smartphone,
  Upload,
  Users,
  Wallet,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Features() {
  const features = [
    { icon: Send, title: "Instant Money Transfer", description: "Send money instantly using phone or email. Fast, reliable, and secure." },
    { icon: Download, title: "Cash Out Anytime", description: "Withdraw funds at 50,000+ agent points or directly to your bank." },
    { icon: Upload, title: "Easy Cash In", description: "Add money easily via agents, cards, or bank transfers." },
    { icon: CreditCard, title: "Bill Payments", description: "Pay bills, recharge phones, and shop online directly from your wallet." },
    { icon: BarChart3, title: "Transaction History", description: "Track all transactions with smart analytics and visual insights." },
    { icon: Bell, title: "Real-time Notifications", description: "Instant alerts for every activity to keep you informed." },
    { icon: Clock, title: "24/7 Availability", description: "Access your wallet anytime, anywhere with complete uptime." },
    { icon: Users, title: "Agent Network", description: "Nationwide verified agents for cash in/out convenience." },
    { icon: Shield, title: "Advanced Security", description: "Encryption, MFA, and fraud protection keep you safe." },
    { icon: Lock, title: "Privacy Protection", description: "We value your privacy — your data stays secure and encrypted." },
    { icon: Zap, title: "Lightning Fast", description: "Ultra-fast processing so your payments are instant." },
    { icon: FileText, title: "Digital Receipts", description: "Instant, paperless receipts for every transaction." },
    { icon: Globe, title: "Multi-Platform Access", description: "Use PayFlow on web, mobile, or tablet — always in sync." },
    { icon: Smartphone, title: "Mobile Optimized", description: "Beautifully responsive, designed for modern mobile users." },
    { icon: BarChart3, title: "Financial Insights", description: "Get spending summaries and smart budget insights." },
    { icon: Headphones, title: "24/7 Support", description: "Our support team is always available for assistance." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-200 to-green-100 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-green-700 text-sm font-medium">
              <Wallet className="h-4 w-4 text-green-600" />
              <span>Secure. Smart. Seamless.</span>
            </div>

            <h1 className="text-5xl font-extrabold text-purple-900 mb-4">
              Powerful Features
            </h1>
            <p className="text-lg text-purple-800/80 max-w-2xl mx-auto">
              Manage your money effortlessly — all tools you need, beautifully integrated in one secure platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-t from-white via-purple-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="h-full border-2 border-purple-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl rounded-2xl bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 mb-4 shadow-lg">
                      <feature.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-purple-900">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base text-purple-700/80 mt-2">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-green-500 via-emerald-600 to-green-700 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Lock className="h-12 w-12 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl font-extrabold mb-4">
              Experience the Future of Finance
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Sign up today and unlock all premium PayFlow features — secure, fast, and built for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div whileHover={{ scale: 1.07 }}>
                <Link to="/register">
                  <Button
                    size="xl"
                    className="bg-white text-green-600 font-semibold px-8 py-6 rounded-xl hover:bg-purple-100 transition-all duration-300"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.07 }}>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-2 border-white text-white bg-transparent font-semibold px-8 py-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

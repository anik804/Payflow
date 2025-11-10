import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I create a PayFlow account?",
      answer:
        "Creating an account is simple! Click on 'Get Started' or 'Register', fill in your basic information including name, email, and phone number, verify your email and phone, and you're ready to start using PayFlow.",
    },
    {
      question: "Is my money safe with PayFlow?",
      answer:
        "Absolutely! We use bank-level security with 256-bit encryption, multi-factor authentication, and advanced fraud detection. Your funds are also insured and stored in secure partner banks.",
    },
    {
      question: "What are the transaction fees?",
      answer:
        "Sending money to other PayFlow users is completely free. Other services have minimal fees: Cash in at agents costs 1% + $0.50, cash out costs 1.5% + $0.50, and bank transfers cost $2.00 flat. Bill payments are free!",
    },
    {
      question: "How long do transactions take?",
      answer:
        "Most transactions are instant! Money transfers between PayFlow users happen in seconds. Cash in/out at agents is immediate, and bank transfers typically complete within 1-2 business days.",
    },
    {
      question: "Can I send money internationally?",
      answer:
        "Currently, PayFlow operates within the country. We're working on adding international transfer capabilities soon. Stay tuned for updates!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-purple-200 to-green-100 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <h1 className="text-5xl font-extrabold mb-4 text-purple-900">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Find answers to the most common questions about PayFlow
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto border-2 border-purple-100 bg-white/90 backdrop-blur-md shadow-md">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem value={`item-${index}`} className="hover:bg-purple-50 rounded-lg transition-all">
                      <AccordionTrigger className="text-left font-semibold text-purple-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-purple-800/80 mt-2">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">
              Still Have Questions?
            </h2>
            <p className="text-lg text-purple-700 mb-8">
              Our support team is always ready to help you
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-purple-600 text-white hover:opacity-90 transition-all"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

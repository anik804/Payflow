import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I create a PayFlow account?",
      answer: "Creating an account is simple! Click on 'Get Started' or 'Register', fill in your basic information including name, email, and phone number, verify your email and phone, and you're ready to start using PayFlow."
    },
    {
      question: "Is my money safe with PayFlow?",
      answer: "Absolutely! We use bank-level security with 256-bit encryption, multi-factor authentication, and advanced fraud detection. Your funds are also insured and stored in secure partner banks."
    },
    {
      question: "What are the transaction fees?",
      answer: "Sending money to other PayFlow users is completely free. Other services have minimal fees: Cash in at agents costs 1% + $0.50, cash out costs 1.5% + $0.50, and bank transfers cost $2.00 flat. Bill payments are free!"
    },
    {
      question: "How long do transactions take?",
      answer: "Most transactions are instant! Money transfers between PayFlow users happen in seconds. Cash in/out at agents is immediate, and bank transfers typically complete within 1-2 business days."
    },
    {
      question: "Can I send money internationally?",
      answer: "Currently, PayFlow operates within the country. We're working on adding international transfer capabilities soon. Stay tuned for updates!"
    },
    {
      question: "What if I forget my password?",
      answer: "No worries! Click on 'Forgot Password' on the login page, enter your registered email, and you'll receive instructions to reset your password securely."
    },
    {
      question: "How do I become an agent?",
      answer: "To become a PayFlow agent, click 'Register' and select 'Agent' as your role. You'll need to provide business verification documents. Our team will review your application and contact you within 2-3 business days."
    },
    {
      question: "What are the transaction limits?",
      answer: "Personal accounts have a $10,000 monthly transaction limit. Business and Enterprise accounts have higher or unlimited limits. You can upgrade your account anytime from your dashboard."
    },
    {
      question: "Can I link my bank account?",
      answer: "Yes! You can link your bank account for easy deposits and withdrawals. Go to Settings > Linked Accounts and follow the secure verification process."
    },
    {
      question: "How do I contact customer support?",
      answer: "We're here 24/7! You can reach us via email at support@payflow.com, call us at +1 (555) 123-4567, or use the live chat feature in your dashboard."
    },
    {
      question: "What happens if I send money to the wrong person?",
      answer: "Contact our support team immediately. If the transaction hasn't been claimed, we can help reverse it. We recommend always double-checking recipient details before confirming transactions."
    },
    {
      question: "Can I cancel a transaction?",
      answer: "Transactions are processed instantly, so they cannot be canceled once completed. However, you can request a refund from the recipient or contact support for assistance."
    },
    {
      question: "Do you offer a mobile app?",
      answer: "Our platform is fully optimized for mobile web browsers, providing an app-like experience. Native iOS and Android apps are currently in development and will be launched soon!"
    },
    {
      question: "What payment methods can I use to add money?",
      answer: "You can add money through bank transfers, debit/credit cards, or by visiting any of our 50,000+ agent locations nationwide."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees, ever! We believe in complete transparency. All fees are clearly displayed before you confirm any transaction."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-white/90">
              Find answers to common questions about PayFlow
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is always ready to help you
            </p>
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

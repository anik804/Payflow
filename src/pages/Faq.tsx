"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading?: string;
  description?: string;
  items?: FaqItem[];
}

const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "What is a digital wallet?",
    answer:
      "A digital wallet is a secure online platform that allows you to store money, send and receive funds, and manage transactions digitally from your mobile device or computer.",
  },
  {
    id: "faq-2",
    question: "How do I create a wallet and get started?",
    answer:
      "Your digital wallet is automatically created when you successfully register an account. Your initial balance will be ৳50.",
  },
  {
    id: "faq-3",
    question: "How can I add money to my wallet?",
    answer:
      "You can add money through a designated agent. Visit an agent point and request a cash-in transaction.",
  },
  {
    id: "faq-4",
    question: "Can I withdraw money from my wallet?",
    answer:
      "Yes, you can withdraw money by visiting an agent point. The agent will hand over cash and deduct the amount from your wallet.",
  },
  {
    id: "faq-5",
    question: "How do I send money to another user?",
    answer:
      "Log into your account and initiate a send-money transaction using the recipient's wallet ID or phone number.",
  },
];

export default function FAQ({
  heading = "Frequently asked questions",
  description = "Find answers to the most common questions about our services.",
  items = faqItems,
}: Faq3Props) {
  return (
    <section className="py-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container mx-auto space-y-16"
      >
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            {heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground lg:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* FAQ Items */}
        <motion.div
          className="mx-auto w-full lg:max-w-3xl"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          <Accordion type="single" collapsible>
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <AccordionItem value={item.id} className="rounded-xl mb-2">
                  <AccordionTrigger
                    className="group transition-all rounded-xl px-4 py-3 hover:bg-muted/50"
                  >
                    <span className="text-left font-medium text-base lg:text-lg transition-all group-hover:text-primary">
                      {item.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent asChild>
                    <AnimatePresence initial={false}>
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="px-4 pb-4"
                      >
                        <p className="text-muted-foreground lg:text-lg">
                          {item.answer}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}

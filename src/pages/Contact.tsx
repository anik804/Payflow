import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-purple-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-600 to-purple-700 text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Have questions? We're here to help. Reach out to our team and
              we’ll get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["support@payflow.com", "sales@payflow.com"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
                },
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: [
                    "123 Finance Street",
                    "New York, NY 10001",
                    "United States",
                  ],
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  lines: [
                    "Mon–Fri: 9:00 AM – 6:00 PM",
                    "Sat: 10:00 AM – 4:00 PM",
                    "Sun: Closed",
                  ],
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Card className="hover:shadow-lg border-2 border-purple-100 transition-all duration-300 hover:border-green-400">
                    <CardHeader>
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-purple-600 mb-4">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-purple-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {item.lines.map((line, idx) => (
                        <p key={idx} className="text-purple-800/80">
                          {line}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Form + Map */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Contact Form */}
              <Card className="shadow-lg border-2 border-green-100 hover:border-green-400 transition-all duration-300 flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-900">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 h-full flex flex-col"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                      />
                    </div>

                    {/* Bigger Message Box */}
                    <div className="space-y-2 flex-grow">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[190px] md:min-h-[260px] lg:min-h-[320px] resize-none"
                        required
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.03 }}>
                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        className="w-full bg-gradient-to-r from-green-600 to-purple-600 text-white hover:opacity-90 transition-all"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              {/* Embedded Map under Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-2xl shadow-lg border-2 border-green-100"
              >
                <iframe
                  title="PayFlow Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8671215050514!2d-74.0060153845933!3d40.71277597933032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c1b9c1f%3A0x70a9b9d9e1ab7cf3!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

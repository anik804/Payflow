import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We prioritize user experience and satisfaction in everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in service delivery and innovation."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Financial services accessible to everyone, everywhere."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous improvement and expansion of our services."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About PayFlow</h1>
            <p className="text-lg text-white/90">
              Revolutionizing digital payments and making financial services accessible to everyone
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To empower individuals and businesses with seamless, secure, and accessible digital payment solutions that transform the way people manage their finances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-secondary mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To become the world's most trusted and innovative digital wallet platform, enabling financial inclusion and prosperity for all.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, PayFlow was born from a simple idea: making digital payments accessible to everyone, regardless of their technical expertise or financial background.
              </p>
              <p>
                What started as a small startup with a handful of passionate individuals has grown into a platform serving over 5 million users across the country. Our journey has been marked by continuous innovation, unwavering commitment to security, and a deep understanding of our users' needs.
              </p>
              <p>
                Today, PayFlow stands as a testament to what's possible when technology meets purpose. We've processed over $2 billion in transactions, partnered with 50,000+ agent locations, and continue to expand our services to reach even more people.
              </p>
              <p>
                But we're not stopping here. Our vision extends beyond just payments – we're building a comprehensive financial ecosystem that empowers people to achieve their financial goals, from everyday transactions to long-term wealth building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:border-primary/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg gradient-primary mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're a diverse team of designers, engineers, financial experts, and customer service professionals united by a common goal: making financial services better for everyone.
            </p>
            <p className="text-muted-foreground">
              With backgrounds spanning fintech, banking, technology, and user experience design, our team brings together decades of combined experience to create a platform that's both powerful and easy to use.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

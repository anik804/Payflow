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
      description: "We strive for excellence in every service, ensuring reliability and innovation."
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Bringing digital finance closer to everyone — no matter where they are."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Constantly evolving with technology to provide better financial empowerment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-500 via-emerald-500 to-purple-600 min-h-[80vh] flex items-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About PayFlow
            </h1>
            <p className="text-lg text-white/90">
              Empowering millions with a smarter, faster, and more secure way to manage money.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-t from-purple-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-green-200 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 mb-4 shadow-md">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  To empower individuals and businesses with seamless, secure, and accessible digital payment solutions that transform how people manage their finances.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 mb-4 shadow-md">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-2xl text-purple-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  To become the world’s most trusted digital wallet — enabling secure, inclusive, and borderless financial freedom for all.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-purple-900">
              Our Story
            </h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                Founded in 2020, <span className="font-semibold text-green-600">PayFlow</span> was born from a simple idea — making digital payments easy, secure, and available to everyone.
              </p>
              <p>
                From a small startup with a few passionate innovators, we’ve grown into a trusted platform serving over <span className="font-semibold text-purple-700">5 million users</span> nationwide. Our focus has always been innovation, reliability, and user trust.
              </p>
              <p>
                Today, PayFlow stands at the intersection of technology and financial empowerment, processing over <span className="font-semibold text-green-600">$2 billion</span> in transactions and partnering with more than 50,000 agents across the country.
              </p>
              <p>
                As we look forward, our mission remains the same — to build a full digital financial ecosystem that helps users achieve their financial goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-purple-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-2 border-transparent hover:border-green-400 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r from-green-500 to-purple-500 mx-auto mb-4 shadow-md">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-800">{value.title}</CardTitle>
                  <CardDescription className="text-gray-600">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-t from-green-100 via-white to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-purple-900">Our Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              We’re a passionate team of innovators, engineers, and financial experts building the future of payments.
            </p>
            <p className="text-gray-600">
              Our combined experience across fintech, banking, and design enables us to create powerful yet simple solutions that redefine digital transactions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

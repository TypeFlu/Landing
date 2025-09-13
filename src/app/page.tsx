import {
  Activity,
  ArrowRight,
  BarChart3,
  PieChart,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              ✨ Now with AI-powered insights
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Beautiful Analytics
              <span className="block text-muted-foreground">Made Simple</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform your data into actionable insights with our intuitive
              dashboard. Monitor performance, track trends, and make data-driven
              decisions with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you understand your data and
              grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Real-time Analytics",
                description:
                  "Monitor your metrics in real-time with live data updates and instant notifications.",
              },
              {
                icon: PieChart,
                title: "Interactive Charts",
                description:
                  "Visualize your data with beautiful, interactive charts and customizable dashboards.",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                description:
                  "Share insights and collaborate with your team through shared dashboards and reports.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description:
                  "Bank-level security with encryption, SSO, and comprehensive audit logs.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized for speed with sub-second query times and instant data visualization.",
              },
              {
                icon: Smartphone,
                title: "Mobile Ready",
                description:
                  "Access your dashboard anywhere with our fully responsive mobile experience.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-200 border-border bg-card/80 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-card-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "50M+", label: "Data Points Processed" },
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-muted/30 rounded-2xl p-12 border border-border">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using our dashboard to make better
              decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Dashboard
              </span>
            </div>
            <div className="flex items-center space-x-6 text-muted-foreground">
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="hover:text-foreground transition-colors"
              >
                Support
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Dashboard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

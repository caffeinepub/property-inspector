import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Home,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Shield,
    title: "Property Inspection",
    desc: "Thorough structural, legal, and compliance checks before you buy or rent.",
  },
  {
    icon: TrendingUp,
    title: "Valuation Reports",
    desc: "Certified market-rate valuations backed by 10+ years of Mumbai data.",
  },
  {
    icon: Home,
    title: "Buying & Selling",
    desc: "End-to-end advisory from search to registration — stress-free transactions.",
  },
  {
    icon: Eye,
    title: "Site Visits",
    desc: "Scheduled and surprise visits with detailed photographic reports.",
  },
];

const stats = [
  { value: "500+", label: "Properties Inspected" },
  { value: "10+", label: "Years Experience" },
  { value: "1,000+", label: "Happy Clients" },
  { value: "100%", label: "Transparent" },
];

const testimonials = [
  {
    name: "Anita Sharma",
    role: "First-time Homebuyer, Powai",
    quote:
      "Property Inspector saved me from buying a flat with hidden water damage. Their report was incredibly detailed. I couldn't have made this decision without them.",
    stars: [1, 2, 3, 4, 5],
  },
  {
    name: "Rajesh Mehta",
    role: "Investor, Bandra West",
    quote:
      "I've worked with many brokers across Mumbai, but the level of professionalism and transparency from Property Inspector is truly unmatched. They're my go-to advisors.",
    stars: [1, 2, 3, 4, 5],
  },
  {
    name: "Sunita Patel",
    role: "Seller, Goregaon East",
    quote:
      "They helped me price my apartment correctly and sold it within 3 weeks at a price above my expectation. Exceptional service from start to finish.",
    stars: [1, 2, 3, 4, 5],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-mumbai.dim_1600x900.jpg')",
          }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-4">
              Mumbai Real Estate Advisory
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Mumbai's Most Trusted{" "}
              <span className="text-gold">Property Inspector</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Professional inspection, valuation, and advisory services for
              buyers, sellers, and investors across Mumbai. Make your most
              important decision with complete confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-accent/90 text-foreground font-bold shadow-gold"
                data-ocid="hero.primary_button"
              >
                <a href="#/listings">
                  Explore Listings <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                data-ocid="hero.secondary_button"
              >
                <a href="#/contact">Get Free Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
              What We Do
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Comprehensive Real Estate Services
            </h2>
            <div className="section-divider" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              From your first viewing to the final paperwork — we're with you at
              every step.
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}>
                <Card className="card-hover h-full shadow-card border-border group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gold transition-colors">
                      <s.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-navy mb-2">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white"
            >
              <a href="#/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
              Client Stories
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Trusted by Hundreds of Mumbai Families
            </h2>
            <div className="section-divider" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={itemVariants}>
                <Card className="h-full shadow-card border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-4">
                      {t.stars.map((s) => (
                        <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">
                          {t.name}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
            Let our experts guide you through Mumbai's complex real estate
            market with clarity and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-accent/90 text-foreground font-bold shadow-gold"
            >
              <a href="#/contact">Get Free Consultation</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white"
            >
              <a href="#/listings">Browse Listings</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

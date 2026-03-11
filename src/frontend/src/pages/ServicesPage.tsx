import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart2,
  CheckCircle,
  Eye,
  FileText,
  Home,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Shield,
    title: "Property Inspection",
    desc: "Our certified inspectors conduct detailed structural, electrical, plumbing, and legal compliance checks. We leave no stone unturned so you don't inherit someone else's problems.",
    points: [
      "Structural integrity assessment",
      "Electrical and plumbing audit",
      "Waterproofing and seepage check",
      "RERA compliance verification",
      "Photographic inspection report",
    ],
  },
  {
    icon: Home,
    title: "Buying Assistance",
    desc: "From shortlisting to negotiations to registration, we guide first-time buyers and investors through every step of the Mumbai property buying process.",
    points: [
      "Requirement analysis & shortlisting",
      "Market price benchmarking",
      "Negotiation support",
      "Due diligence on seller",
      "End-to-end transaction support",
    ],
  },
  {
    icon: TrendingUp,
    title: "Selling Assistance",
    desc: "We help sellers position their property correctly, reach genuine buyers, and close at the best possible price — fast and without unnecessary complications.",
    points: [
      "Competitive pricing strategy",
      "Professional property photography",
      "Targeted buyer outreach",
      "Offer evaluation & negotiation",
      "Legal facilitation for transfer",
    ],
  },
  {
    icon: Eye,
    title: "Site Visits",
    desc: "Can't visit in person? Or want an unbiased second opinion? Our team conducts thorough scheduled and unscheduled site visits with detailed video and photo documentation.",
    points: [
      "Scheduled and surprise visits",
      "HD video walkthroughs",
      "Neighborhood assessment",
      "Builder credibility check",
      "Under-construction progress reports",
    ],
  },
  {
    icon: BarChart2,
    title: "Valuation Reports",
    desc: "Get a certified, market-backed valuation report for your property. Ideal for purchase decisions, bank loans, legal disputes, or estate planning.",
    points: [
      "Certified valuation certificate",
      "Comparative market analysis",
      "Location premium assessment",
      "Bank-accepted format",
      "Turnaround in 48–72 hours",
    ],
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    desc: "Navigating Mumbai property documents is complex. Our legal team reviews all documents, flags issues, and assists with stamp duty, registration, and more.",
    points: [
      "Title deed verification",
      "Encumbrance certificate review",
      "Society NOC and approvals",
      "Stamp duty & registration guidance",
      "Agreement drafting & review",
    ],
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

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Complete Real Estate Services
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Six specialist services, one trusted team. Everything you need to
              transact confidently in Mumbai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={itemVariants}>
                <Card className="card-hover h-full shadow-card group">
                  <CardContent className="p-7">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                      <s.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {s.desc}
                    </p>
                    <ul className="space-y-2">
                      {s.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-secondary/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">
            Need a Custom Advisory Package?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We tailor our services to your exact needs — whether you're a
            first-time buyer or a large portfolio investor.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-accent/90 text-foreground font-bold shadow-gold"
          >
            <a href="#/contact">Talk to an Expert</a>
          </Button>
        </div>
      </section>
    </div>
  );
}

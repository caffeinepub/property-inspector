import { Card, CardContent } from "@/components/ui/card";
import { Award, Eye, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const team = [
  {
    name: "Vikram Desai",
    title: "Founder & Chief Inspector",
    photo: "/assets/generated/team-vikram.dim_400x400.jpg",
    bio: "20+ years in Mumbai real estate. Certified property inspector with expertise in residential and commercial properties.",
  },
  {
    name: "Rahul Kapoor",
    title: "Senior Property Advisor",
    photo: "/assets/generated/team-rahul.dim_400x400.jpg",
    bio: "Expert in Bandra, Juhu, and South Mumbai markets. Has facilitated 300+ successful transactions.",
  },
  {
    name: "Priya Nair",
    title: "Valuation & Legal Head",
    photo: "/assets/generated/team-priya.dim_400x400.jpg",
    bio: "Certified valuer and legal documentation specialist. Ensures every deal is airtight and compliant.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Trust",
    desc: "We operate with complete honesty. What we find, we report — no matter what.",
  },
  {
    icon: Award,
    title: "Expertise",
    desc: "10+ years of deep, market-specific knowledge across all Mumbai micro-markets.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Full disclosure at every stage. You'll always know exactly where things stand.",
  },
  {
    icon: Users,
    title: "Client-First",
    desc: "Your goals drive every recommendation. We succeed only when you succeed.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="bg-navy py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
              Who We Are
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Built on Trust,
              <br />
              Backed by Expertise
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Since 2013, Property Inspector has been Mumbai's most reliable
              real estate advisory and inspection firm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-display text-3xl font-bold text-navy mb-5">
                From a Single Inspection to Mumbai's Most Trusted Name
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Property Inspector was founded in 2013 by Vikram Desai with a
                  simple but powerful mission: to bring honesty and
                  professionalism to Mumbai's real estate market. After
                  witnessing buyers lose their life savings to undisclosed
                  property defects, Vikram set out to change how transactions
                  happen.
                </p>
                <p>
                  Today, we operate across all Mumbai and MMR zones, serving
                  first-time buyers, seasoned investors, NRI buyers, and
                  sellers. Our team of certified inspectors, valuers, and legal
                  advisors brings rigour and integrity to every engagement.
                </p>
                <p>
                  We've inspected over 500 properties, facilitated transactions
                  worth ₹1,200+ crore, and maintained a 98% client satisfaction
                  score. Our growth has been entirely organic — built on
                  referrals and repeat business, because we do right by our
                  clients.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2013", label: "Founded" },
                { value: "500+", label: "Properties Inspected" },
                { value: "₹1,200 Cr", label: "Transaction Value" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-secondary/50 rounded-xl p-6 text-center border border-border"
                >
                  <p className="font-display text-3xl font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
              Our Team
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Meet the Experts
            </h2>
            <div className="section-divider" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="card-hover shadow-card overflow-hidden">
                  <div className="aspect-square overflow-hidden bg-secondary">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-display text-xl font-bold text-navy">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm font-semibold mb-3">
                      {member.title}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-2">
              What Guides Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <div className="section-divider" />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={itemVariants}>
                <Card className="card-hover shadow-card text-center p-6 group">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                      <v.icon className="w-7 h-7 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

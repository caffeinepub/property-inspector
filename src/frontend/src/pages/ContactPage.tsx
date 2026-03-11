import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Type } from "../backend.d";
import { useSubmitInquiry } from "../hooks/useQueries";

const budgetOptions = [
  { label: "Under ₹50 Lakhs", value: "5000000" },
  { label: "₹50L – ₹1 Crore", value: "10000000" },
  { label: "₹1 Cr – ₹2 Crore", value: "20000000" },
  { label: "₹2 Cr – ₹5 Crore", value: "50000000" },
  { label: "₹5 Crore+", value: "100000000" },
];

const propertyTypeOptions = [
  { label: "Apartment", value: Type.apartment },
  { label: "Villa", value: Type.villa },
  { label: "Office", value: Type.office },
  { label: "Retail", value: Type.retail },
];

export default function ContactPage() {
  const mutation = useSubmitInquiry();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "" as Type | "",
    location: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) errs.phone = "Phone is required";
    if (!form.email.trim() || !form.email.includes("@"))
      errs.email = "Valid email is required";
    if (!form.propertyType) errs.propertyType = "Property type is required";
    if (!form.location.trim()) errs.location = "Location is required";
    if (!form.budget) errs.budget = "Budget is required";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    mutation.mutate({
      name: form.name,
      phone: form.phone,
      email: form.email,
      propertyType: form.propertyType as Type,
      location: form.location,
      budget: BigInt(form.budget),
      message: form.message,
    });
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Start Your Property Journey
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Fill in the form below and our expert advisors will get back to
              you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {mutation.isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  data-ocid="contact.success_state"
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-10 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h2 className="font-display text-2xl font-bold text-navy mb-2">
                    Inquiry Submitted!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. Our team will contact you within
                    24 hours.
                  </p>
                  <Button
                    onClick={() => mutation.reset()}
                    className="bg-gold hover:bg-accent/90 text-foreground font-bold"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl font-bold text-navy mb-6">
                      Client Inquiry Form
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={form.name}
                            onChange={(e) =>
                              handleChange("name", e.target.value)
                            }
                            placeholder="Anita Sharma"
                            data-ocid="contact.name.input"
                            className={errors.name ? "border-destructive" : ""}
                          />
                          {errors.name && (
                            <p className="text-destructive text-xs">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        {/* Phone */}
                        <div className="space-y-1.5">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) =>
                              handleChange("phone", e.target.value)
                            }
                            placeholder="+91 98765 43210"
                            data-ocid="contact.phone.input"
                            className={errors.phone ? "border-destructive" : ""}
                          />
                          {errors.phone && (
                            <p className="text-destructive text-xs">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          placeholder="anita@example.com"
                          data-ocid="contact.email.input"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-destructive text-xs">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Property Type */}
                        <div className="space-y-1.5">
                          <Label>Property Type *</Label>
                          <Select
                            value={form.propertyType}
                            onValueChange={(v) =>
                              handleChange("propertyType", v)
                            }
                          >
                            <SelectTrigger
                              data-ocid="contact.propertytype.select"
                              className={
                                errors.propertyType ? "border-destructive" : ""
                              }
                            >
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {propertyTypeOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.propertyType && (
                            <p className="text-destructive text-xs">
                              {errors.propertyType}
                            </p>
                          )}
                        </div>
                        {/* Budget */}
                        <div className="space-y-1.5">
                          <Label>Budget *</Label>
                          <Select
                            value={form.budget}
                            onValueChange={(v) => handleChange("budget", v)}
                          >
                            <SelectTrigger
                              data-ocid="contact.budget.select"
                              className={
                                errors.budget ? "border-destructive" : ""
                              }
                            >
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {errors.budget && (
                            <p className="text-destructive text-xs">
                              {errors.budget}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="space-y-1.5">
                        <Label htmlFor="location">Preferred Location *</Label>
                        <Input
                          id="location"
                          value={form.location}
                          onChange={(e) =>
                            handleChange("location", e.target.value)
                          }
                          placeholder="e.g. Bandra West, Powai, Worli"
                          data-ocid="contact.location.input"
                          className={
                            errors.location ? "border-destructive" : ""
                          }
                        />
                        {errors.location && (
                          <p className="text-destructive text-xs">
                            {errors.location}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          value={form.message}
                          onChange={(e) =>
                            handleChange("message", e.target.value)
                          }
                          placeholder="Tell us what you're looking for, any specific requirements..."
                          rows={4}
                          data-ocid="contact.message.textarea"
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && (
                          <p className="text-destructive text-xs">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Error state */}
                      {mutation.isError && (
                        <div
                          data-ocid="contact.error_state"
                          className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>Something went wrong. Please try again.</span>
                        </div>
                      )}

                      {/* Submit */}
                      {mutation.isPending ? (
                        <div
                          data-ocid="contact.loading_state"
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm">
                            Submitting your inquiry...
                          </span>
                        </div>
                      ) : null}

                      <Button
                        type="submit"
                        size="lg"
                        disabled={mutation.isPending}
                        className="w-full bg-gold hover:bg-accent/90 text-foreground font-bold shadow-gold"
                        data-ocid="contact.submit_button"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                            Submitting...
                          </>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <Card className="shadow-card overflow-hidden">
                <div className="bg-navy p-5">
                  <h3 className="font-display text-xl font-bold text-white">
                    Mumbai Office
                  </h3>
                  <p className="text-white/60 text-sm mt-1">
                    Open Mon–Sat, 9am–7pm
                  </p>
                </div>
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-navy">Address</p>
                      <p className="text-muted-foreground text-sm">
                        123 Business Bay, BKC,
                        <br />
                        Mumbai 400051
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-navy">Phone</p>
                      <a
                        href="tel:+919876543210"
                        className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm text-navy">Email</p>
                      <a
                        href="mailto:info@propertyinspector.in"
                        className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      >
                        info@propertyinspector.in
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-secondary/40">
                <CardContent className="p-5">
                  <h4 className="font-semibold text-navy mb-2">
                    Why Choose Us?
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Certified property inspectors",
                      "RERA compliant processes",
                      "Response within 24 hours",
                      "Free initial consultation",
                      "No hidden charges",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

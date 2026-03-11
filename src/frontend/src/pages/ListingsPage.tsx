import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  MapPin,
  SquareCode,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Status, Type } from "../backend.d";
import type { Property } from "../backend.d";
import { useGetAvailableProperties } from "../hooks/useQueries";

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: BigInt(1),
    title: "Luxurious Sea-View Apartment",
    description:
      "Stunning 3BHK with panoramic Arabian Sea views from the 24th floor. Premium fittings, modular kitchen.",
    location: "Bandra West",
    price: BigInt(32500000),
    area: BigInt(1450),
    bedrooms: BigInt(3),
    bathrooms: BigInt(2),
    propertyType: Type.apartment,
    status: Status.available,
    isAvailable: true,
  },
  {
    id: BigInt(2),
    title: "Modern 2BHK in Premium Society",
    description:
      "Well-maintained 2BHK in a gated community with gym, pool, and 24/7 security. Ready to move.",
    location: "Powai",
    price: BigInt(16500000),
    area: BigInt(980),
    bedrooms: BigInt(2),
    bathrooms: BigInt(2),
    propertyType: Type.apartment,
    status: Status.available,
    isAvailable: true,
  },
  {
    id: BigInt(3),
    title: "Spacious Villa with Private Garden",
    description:
      "Independent 4BHK villa with a 2,000 sq.ft. garden, double garage, and private entrance. Rare find.",
    location: "Juhu",
    price: BigInt(85000000),
    area: BigInt(3200),
    bedrooms: BigInt(4),
    bathrooms: BigInt(4),
    propertyType: Type.villa,
    status: Status.available,
    isAvailable: true,
  },
  {
    id: BigInt(4),
    title: "Grade-A Office Space, BKC",
    description:
      "1,800 sq.ft. plug-and-play office in Mumbai's premium commercial hub. 24/7 access, fiber internet.",
    location: "Bandra Kurla Complex",
    price: BigInt(45000000),
    area: BigInt(1800),
    propertyType: Type.office,
    status: Status.available,
    isAvailable: true,
  },
  {
    id: BigInt(5),
    title: "Compact 1BHK, Great Connectivity",
    description:
      "Affordable 1BHK near Andheri station. Ideal for young professionals. Low maintenance society.",
    location: "Andheri East",
    price: BigInt(8500000),
    area: BigInt(520),
    bedrooms: BigInt(1),
    bathrooms: BigInt(1),
    propertyType: Type.apartment,
    status: Status.available,
    isAvailable: true,
  },
  {
    id: BigInt(6),
    title: "Retail Shop, High Footfall Area",
    description:
      "Ground floor retail unit in a busy commercial complex. 400 sq.ft., parking available.",
    location: "Goregaon West",
    price: BigInt(12000000),
    area: BigInt(400),
    propertyType: Type.retail,
    status: Status.available,
    isAvailable: true,
  },
];

function formatPrice(price: bigint): string {
  const n = Number(price);
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Cr`;
  if (n >= 100000) return `₹${(n / 100000).toFixed(0)} L`;
  return `₹${n.toLocaleString("en-IN")}`;
}

function typeLabel(t: Type): string {
  return (
    {
      apartment: "Apartment",
      villa: "Villa",
      office: "Office",
      retail: "Retail",
    }[t] ?? t
  );
}

const LOCATIONS = [
  "All Locations",
  "Bandra West",
  "Powai",
  "Juhu",
  "Bandra Kurla Complex",
  "Andheri East",
  "Goregaon West",
  "Worli",
  "Lower Parel",
];

export default function ListingsPage() {
  const { data: backendProps, isLoading } = useGetAvailableProperties();
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("All Locations");

  const properties: Property[] =
    backendProps && backendProps.length > 0 ? backendProps : SAMPLE_PROPERTIES;

  const filtered = properties.filter((p) => {
    const matchType = typeFilter === "all" || p.propertyType === typeFilter;
    const matchLocation =
      locationFilter === "All Locations" || p.location === locationFilter;
    return matchType && matchLocation;
  });

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
              Properties
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-5">
              Available Listings
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Handpicked, inspected, and verified properties across Mumbai's top
              neighbourhoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white border-b border-border shadow-xs py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground mr-1">
              Filter by:
            </span>
            <div className="flex gap-1 flex-wrap" data-ocid="listings.type.tab">
              {["all", "apartment", "villa", "office", "retail"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTypeFilter(t)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold capitalize transition-colors ${
                    typeFilter === t
                      ? "bg-navy text-white"
                      : "bg-secondary text-foreground hover:bg-primary/10"
                  }`}
                >
                  {t === "all" ? "All Types" : typeLabel(t as Type)}
                </button>
              ))}
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger
                className="w-[180px] h-8 text-xs"
                data-ocid="listings.location.select"
              >
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                {LOCATIONS.map((l) => (
                  <SelectItem key={l} value={l}>
                    {l}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div
              data-ocid="listings.loading_state"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {["s1", "s2", "s3", "s4", "s5", "s6"].map((key) => (
                <Card key={key} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-5 space-y-3">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-32" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div data-ocid="listings.empty_state" className="text-center py-20">
              <Building2 className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-navy mb-2">
                No Properties Found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more listings.
              </p>
              <Button
                variant="outline"
                className="mt-6 border-navy text-navy hover:bg-navy hover:text-white"
                onClick={() => {
                  setTypeFilter("all");
                  setLocationFilter("All Locations");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((property, idx) => (
                <PropertyCard
                  key={String(property.id)}
                  property={property}
                  index={idx + 1}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

function PropertyCard({
  property,
  index,
}: { property: Property; index: number }) {
  const bgColors = [
    "from-blue-900 to-blue-700",
    "from-slate-800 to-slate-600",
    "from-indigo-900 to-indigo-700",
    "from-emerald-900 to-emerald-700",
    "from-purple-900 to-purple-700",
    "from-amber-900 to-amber-700",
  ];
  const bg = bgColors[(index - 1) % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      data-ocid={`listings.item.${index}`}
    >
      <Card className="card-hover h-full shadow-card overflow-hidden group">
        <div
          className={`h-48 bg-gradient-to-br ${bg} flex items-center justify-center relative overflow-hidden`}
        >
          <Building2 className="w-16 h-16 text-white/20" />
          <div className="absolute top-3 left-3">
            <Badge className="bg-gold text-foreground text-xs font-bold">
              {typeLabel(property.propertyType)}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="font-display text-xl font-bold text-white drop-shadow">
              {formatPrice(property.price)}
            </span>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-display text-lg font-bold text-navy mb-1 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.location}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {property.description}
          </p>
          <div className="flex gap-4 text-sm text-foreground">
            {property.bedrooms !== undefined && (
              <div className="flex items-center gap-1">
                <BedDouble className="w-4 h-4 text-gold" />
                <span>{String(property.bedrooms)} Beds</span>
              </div>
            )}
            {property.bathrooms !== undefined && (
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4 text-gold" />
                <span>{String(property.bathrooms)} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <SquareCode className="w-4 h-4 text-gold" />
              <span>{String(property.area)} sqft</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-5 pb-5">
          <Button
            asChild
            className="w-full bg-navy hover:bg-primary/90 text-white"
            data-ocid={`listings.item.inquire_button.${index}`}
          >
            <a href="#/contact">
              Inquire Now <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

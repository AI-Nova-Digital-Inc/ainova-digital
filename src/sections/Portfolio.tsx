import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Monitor, Smartphone, X, ExternalLink, Star, Phone, ArrowRight, CheckCircle } from "lucide-react";

const projects = [
  {
    name: "HydroForce Plumbing",
    type: "Plumbing",
    description: "A high-converting plumbing website with emergency booking, service area maps, and automated quote forms. Leads increased 347% in 30 days.",
    primary: "#1e3a8a",
    accent: "#3b82f6",
    highlight: "#60a5fa",
    stat: "+347% leads",
    badge: "bg-blue-500",
    domain: "hydroforceplumbing.com",
    photoUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=80",
    photoAlt: "Professional plumber at work",
    tagline: "Fast. Reliable. Licensed.",
    services: ["Emergency Repair", "Drain Cleaning", "Water Heater", "Installation"],
    phone: "(204) 555-0101",
    trust: ["Licensed & Insured", "5-Star Rated", "Free Estimates", "24/7 Available"],
  },
  {
    name: "ClimaCore HVAC",
    type: "HVAC",
    description: "Premium HVAC site with seasonal promotions, maintenance plan sign-ups, and 24/7 emergency call routing. Ranked #1 locally within 60 days.",
    primary: "#164e63",
    accent: "#06b6d4",
    highlight: "#22d3ee",
    stat: "#1 Google Rank",
    badge: "bg-cyan-500",
    domain: "climacorehvac.com",
    photoUrl: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80",
    photoAlt: "HVAC technician servicing unit",
    tagline: "Comfort You Can Count On.",
    services: ["AC Installation", "Furnace Repair", "Maintenance Plans", "Air Quality"],
    phone: "(204) 555-0202",
    trust: ["NATE Certified", "0% Financing", "Same-Day Service", "Satisfaction Guarantee"],
  },
  {
    name: "RoofMax Contractors",
    type: "Roofing",
    description: "Storm damage leads, instant quote calculator, and before/after galleries. Their site closed $85,000 in new contracts in the first quarter.",
    primary: "#1c1208",
    accent: "#f59e0b",
    highlight: "#fcd34d",
    stat: "$85K new contracts",
    badge: "bg-amber-500",
    domain: "roofmaxcontractors.com",
    photoUrl: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=900&q=80",
    photoAlt: "Roofing contractors on residential roof",
    tagline: "Built to Last. Priced Right.",
    services: ["Roof Replacement", "Leak Repair", "Storm Damage", "Free Inspection"],
    phone: "(204) 555-0303",
    trust: ["Licensed & Bonded", "Insurance Claims", "Free Inspection", "10-Year Warranty"],
  },
  {
    name: "PureGleam Cleaning",
    type: "Cleaning",
    description: "Residential and commercial cleaning booking system with real-time availability, recurring service management, and customer login portal.",
    primary: "#1e0b3b",
    accent: "#8b5cf6",
    highlight: "#a78bfa",
    stat: "3x bookings",
    badge: "bg-violet-500",
    domain: "puregleamcleaning.com",
    photoUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
    photoAlt: "Professional cleaning service team",
    tagline: "Spotless. Every Time.",
    services: ["Deep Clean", "Office Cleaning", "Move-Out Clean", "Window Washing"],
    phone: "(204) 555-0404",
    trust: ["Background Checked", "Eco-Friendly", "Insured Staff", "Online Booking"],
  },
  {
    name: "TitanRidge Construction",
    type: "Construction",
    description: "Project portfolio showcase with before/after sliders, permit tracking, and client login. Positioned as the premium contractor in the region.",
    primary: "#1a0e00",
    accent: "#ea580c",
    highlight: "#fb923c",
    stat: "Premium positioning",
    badge: "bg-orange-600",
    domain: "titanridgeconstruction.com",
    photoUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
    photoAlt: "Construction site with workers and equipment",
    tagline: "We Build What Others Dream.",
    services: ["Home Remodeling", "New Construction", "Commercial Build-Outs", "Project Management"],
    phone: "(204) 555-0505",
    trust: ["15+ Years", "Licensed & Bonded", "$2.4M+ Delivered", "200+ Projects"],
  },
  {
    name: "GreenEdge Landscaping",
    type: "Landscaping",
    description: "Full-service landscaping site with seasonal packages, instant online quotes, and before/after project galleries. Recurring bookings doubled in 45 days.",
    primary: "#052e16",
    accent: "#16a34a",
    highlight: "#4ade80",
    stat: "2x recurring bookings",
    badge: "bg-emerald-600",
    domain: "greenedgelandscaping.com",
    photoUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    photoAlt: "Professional landscaper tending a garden",
    tagline: "Your Yard, Elevated.",
    services: ["Lawn Maintenance", "Garden Design", "Tree & Shrub Care", "Irrigation Systems"],
    phone: "(204) 555-0606",
    trust: ["Fully Insured", "Free Yard Assessment", "Eco-Friendly", "Satisfaction Guarantee"],
  },
];

function LiveDemoModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 24 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 24 }}
        transition={{ type: "spring", damping: 22, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: "#0b1220", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141f32] border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0b1220] rounded-md text-xs text-gray-400">
              <ExternalLink className="w-3 h-3" />
              🔒 {project.domain}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-gray-500" />
            <Smartphone className="w-3.5 h-3.5 text-gray-600" />
            <button
              onClick={onClose}
              className="ml-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        {/* Website preview */}
        <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>

          {/* Site nav */}
          <div
            className="flex items-center justify-between px-6 py-3 sticky top-0 z-10"
            style={{ background: "rgba(10,15,30,0.95)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${project.accent}20` }}
          >
            <div className="font-bold text-white text-sm">{project.name}</div>
            <div className="hidden sm:flex gap-5 text-xs text-white/50">
              <span>Services</span><span>About</span><span>Portfolio</span><span>Contact</span>
            </div>
            <div
              className="px-4 py-1.5 rounded-lg text-xs font-bold text-white"
              style={{ background: project.accent }}
            >
              Get Quote
            </div>
          </div>

          {/* Hero with real photo */}
          <div className="relative overflow-hidden" style={{ height: 280 }}>
            <img
              src={project.photoUrl}
              alt={project.photoAlt}
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.45)" }}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${project.primary}dd 0%, rgba(0,0,0,0.3) 100%)` }}
            />
            {/* Hero text */}
            <div className="absolute inset-0 flex flex-col justify-center px-8">
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: project.highlight }}
              >
                Professional {project.type} Services
              </div>
              <h2 className="text-3xl font-black text-white mb-2 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {project.name}
              </h2>
              <p className="text-white/60 text-sm mb-5">{project.tagline}</p>
              <div className="flex gap-3">
                <div
                  className="px-5 py-2 rounded-xl text-sm font-bold text-white"
                  style={{ background: project.accent }}
                >
                  Get a Free Quote
                </div>
                <div className="px-5 py-2 rounded-xl text-sm font-semibold text-white border border-white/25">
                  Our Services
                </div>
              </div>
              {/* Floating trust badge */}
              <div className="absolute top-4 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white font-semibold"
                style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available Now
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div style={{ background: project.primary + "66", padding: "20px 24px" }}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.services.map((s) => (
                <div
                  key={s}
                  className="rounded-xl p-3 text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: `1px solid ${project.accent}25` }}
                >
                  <div className="text-xs font-semibold text-white">{s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust bar */}
          <div
            className="flex items-center justify-around px-6 py-3 flex-wrap gap-2"
            style={{ background: "rgba(0,0,0,0.4)", borderTop: `1px solid ${project.accent}15`, borderBottom: `1px solid ${project.accent}15` }}
          >
            {project.trust.map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-white/50">
                <CheckCircle className="w-3 h-3" style={{ color: project.accent }} />
                {t}
              </div>
            ))}
          </div>

          {/* Reviews strip */}
          <div className="px-6 py-4 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.3)" }}>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <div className="text-white text-sm font-semibold">4.9</div>
              <div className="text-white/40 text-xs">· 200+ reviews on Google</div>
            </div>
            <a
              href={`tel:${project.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: project.accent }}
            >
              <Phone className="w-3.5 h-3.5" />
              {project.phone}
            </a>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-4 flex items-center justify-between bg-[#0f1b2d] border-t border-white/10">
          <div>
            <div className="text-white font-semibold text-sm">{project.name} — Sample Website</div>
            <div className="text-gray-500 text-xs mt-0.5">Want a site like this for your business?</div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-bold rounded-xl transition-all duration-300 hover:scale-105"
          >
            Get My Website
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onViewDemo }: { project: typeof projects[0]; index: number; onViewDemo: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "rgba(15, 27, 45, 0.9)", border: "1px solid rgba(59,130,246,0.12)" }}
      data-testid={`card-portfolio-${index}`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: `1px solid ${project.accent}50`, boxShadow: `0 0 30px ${project.accent}20` }}
      />

      {/* Website mockup preview with real photo */}
      <div className="relative h-52 overflow-hidden">
        {/* Real photo background */}
        <img
          src={project.photoUrl}
          alt={project.photoAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: "brightness(0.35)" }}
        />
        {/* Color gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${project.primary}bb 0%, rgba(0,0,0,0.2) 100%)` }}
        />

        {/* Browser chrome overlay */}
        <div className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3 py-2 bg-black/40 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-red-400/80" />
          <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <div className="w-2 h-2 rounded-full bg-green-400/80" />
          <div className="flex-1 mx-2 h-4 rounded bg-white/10 flex items-center px-2">
            <span className="text-[9px] text-white/40">{project.domain}</span>
          </div>
          <div className="flex gap-1">
            <Monitor className="w-3 h-3 text-white/30" />
            <Smartphone className="w-3 h-3 text-white/20" />
          </div>
        </div>

        {/* Overlaid website content */}
        <div className="absolute inset-0 pt-8 px-4 pb-4 flex flex-col justify-end">
          <div className="text-xs font-bold text-white mb-1">{project.name}</div>
          <div className="text-[10px] mb-3" style={{ color: project.highlight }}>Professional {project.type} Services</div>
          <div className="flex items-center justify-between">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] font-bold text-white"
              style={{ background: project.accent + "cc" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {project.stat}
            </div>
            <div
              className="px-3 py-1 rounded-full text-[9px] font-semibold text-white"
              style={{ background: "rgba(0,0,0,0.5)", border: `1px solid ${project.accent}50` }}
            >
              Get Quote
            </div>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {project.name}
            </h3>
            <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs text-white font-medium ${project.badge}`}>
              {project.type}
            </span>
          </div>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
            style={{ background: project.accent + "30", border: `1px solid ${project.accent}50` }}
          >
            <ArrowUpRight className="w-4 h-4" style={{ color: project.accent }} />
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

        <button
          onClick={onViewDemo}
          className="mt-4 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 opacity-80 group-hover:opacity-100 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: `linear-gradient(135deg, ${project.accent}30, ${project.accent}10)`,
            border: `1px solid ${project.accent}40`,
            color: project.highlight,
          }}
          data-testid={`button-view-demo-${index}`}
        >
          View Live Demo
        </button>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeDemo, setActiveDemo] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 relative" style={{ background: "linear-gradient(180deg, #0b1220 0%, #060d1a 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Websites That{" "}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real websites built for real businesses. Every project is built to convert visitors into paying customers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onViewDemo={() => setActiveDemo(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeDemo && (
          <LiveDemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

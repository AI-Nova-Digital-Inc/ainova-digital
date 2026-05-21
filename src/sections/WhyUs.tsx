import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Building2, Smartphone, Gauge, Search, Target, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Built for Local Businesses",
    description: "We specialize exclusively in trade and service businesses. We know what local customers need to see before they pick up the phone.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Websites",
    description: "Over 70% of local searches happen on phones. Every site we build looks perfect on mobile before we even touch desktop.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Gauge,
    title: "Fast Loading Performance",
    description: "We optimize every image, script, and asset. Your site loads in under 1.5 seconds — because slow sites lose customers to your competitors.",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description: "Schema markup, local SEO, meta tags, and semantic HTML baked in from day one. We build sites that Google loves to rank.",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Target,
    title: "Conversion-Focused Design",
    description: "Every element exists to turn visitors into leads. Strategic CTAs, social proof, and urgency triggers that drive calls and form fills.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "We don't disappear after launch. Monthly check-ins, content updates, performance monitoring, and priority support when you need it.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

const metrics = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 8, suffix: "", label: "Industries Served" },
  { value: 1.4, suffix: "s", label: "Avg. Load Speed", decimal: true },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix, decimal = false, active }: { value: number; suffix: string; decimal?: boolean; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, value]);

  if (decimal) {
    return <span>{display.toFixed(1)}{suffix}</span>;
  }
  return <span>{Math.round(display)}{suffix}</span>;
}

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0b1220 0%, #080f1c 100%)" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Why Local Businesses{" "}
            <span className="gradient-text">Choose AI Nova</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've built our entire process around one goal: getting local businesses more customers.
          </p>
        </motion.div>

        {/* Metrics */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metrics.map(({ value, suffix, label, decimal }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(59,130,246,0.06)",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <div
                className="text-4xl font-bold mb-2 gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <Counter value={value} suffix={suffix} decimal={decimal} active={inView} />
              </div>
              <div className="text-gray-400 text-sm font-medium">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl p-6"
              style={{
                background: "rgba(15, 27, 45, 0.7)",
                border: "1px solid rgba(59,130,246,0.1)",
              }}
              data-testid={`card-feature-${i}`}
            >
              <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.8} />
              </div>
              <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

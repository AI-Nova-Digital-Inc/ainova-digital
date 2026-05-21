import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    price: "$299",
    priceNote: "starting from",
    badge: null,
    description: "Perfect for solo contractors who need a professional online presence fast.",
    features: [
      "Single-page website",
      "Mobile responsive design",
      "Contact form",
      "Fast-loading design",
      "Basic SEO setup",
      "SSL certificate",
      "1 revision round",
    ],
    cta: "Ask About Starter",
    ctaStyle: "border border-blue-500/40 text-blue-300 hover:text-white hover:bg-blue-900/20",
    highlighted: false,
    glow: "rgba(59,130,246,0.15)",
  },
  {
    name: "Business Website",
    price: "$499",
    priceNote: "starting from",
    badge: "Most Requested",
    description: "Everything a growing local business needs to dominate their market.",
    features: [
      "Multi-page website (up to 6 pages)",
      "Service detail pages",
      "Google Business integration",
      "Lead-generation sections",
      "Contact & quote forms",
      "SEO setup & optimization",
      "Google Analytics setup",
      "2 revision rounds",
    ],
    cta: "Request Business Quote",
    ctaStyle: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.65)]",
    highlighted: true,
    glow: "rgba(59,130,246,0.4)",
  },
  {
    name: "Premium Website / Web App",
    price: "$699",
    priceNote: "starting from",
    badge: null,
    description: "Advanced digital solutions designed for businesses that need premium functionality, scalability, and modern user experiences.",
    features: [
      "Advanced multi-page websites",
      "Booking & scheduling systems",
      "Customer portals",
      "Custom dashboards",
      "Business automations",
      "Custom integrations",
      "Cloud deployment support",
      "Priority support",
    ],
    cta: "Request Premium Quote",
    ctaStyle: "border border-violet-500/40 text-violet-300 hover:text-white hover:bg-violet-900/20",
    highlighted: false,
    glow: "rgba(139,92,246,0.2)",
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080f1c 0%, #0b1220 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
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
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Simple Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Transparent,{" "}
            <span className="gradient-text">No-Surprise Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Invest once, reap leads for years. Every package includes mobile optimization and SEO.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, priceNote, badge, description, features, cta, ctaStyle, highlighted, glow }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative rounded-2xl p-7 ${highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
              style={{
                background: highlighted ? "rgba(30, 58, 138, 0.25)" : "rgba(15, 27, 45, 0.8)",
                border: highlighted ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(59,130,246,0.12)",
                boxShadow: highlighted ? `0 0 60px ${glow}` : "none",
              }}
              data-testid={`card-pricing-${i}`}
            >
              {/* Most Requested badge */}
              {badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    <Sparkles className="w-3 h-3" />
                    {badge}
                  </div>
                </div>
              )}

              {/* Animated border shimmer for highlighted */}
              {highlighted && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 50%, rgba(6,182,212,0.1) 100%)",
                  }}
                />
              )}

              <div className="relative">
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-xs text-gray-500">{priceNote}</span>
                    <span
                      className="text-4xl font-bold gradient-text"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>

                {/* Divider */}
                <div className="h-px bg-blue-900/40 mb-5" />

                {/* Features */}
                <ul className="space-y-3 mb-7">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-blue-400" strokeWidth={3} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${ctaStyle}`}
                  data-testid={`button-pricing-cta-${i}`}
                >
                  {cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All packages include a free consultation. No contracts, no hidden fees.{" "}
          <button onClick={scrollToContact} className="text-blue-400 hover:text-blue-300 underline transition-colors">
            Get in touch
          </button>{" "}
          to discuss your project.
        </motion.p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Info, ShieldCheck, Sparkles, X } from "lucide-react";

const plans = [
  {
    name: "Starter Website",
    oldPrice: "$299",
    price: "$249",
    monthlyPrice: "$29/mo",
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
    oldPrice: "$499",
    price: "$349",
    monthlyPrice: "$49/mo",
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
    oldPrice: "$699",
    price: "$499",
    monthlyPrice: "$69/mo",
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

const carePlanFeatures = [
  "Site updates (text, photos, hours, pricing)",
  "Security & plugin updates",
  "Hosting maintenance & uptime monitoring",
  "Contact form monitoring",
  "Fast support if the website goes down",
  "Small content updates (1–2 changes/month)",
  "Basic performance monitoring",
  "SSL/security monitoring",
  "Monthly backup protection",
  "Spam protection & reliability checks",
  "Priority response for urgent website issues",
];

export default function Pricing() {
  const [activePlan, setActivePlan] = useState<(typeof plans)[number] | null>(null);

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
          {plans.map((plan, i) => {
            const { name, oldPrice, price, monthlyPrice, priceNote, badge, description, features, cta, ctaStyle, highlighted, glow } = plan;

            return (
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
                  <div className="mb-3">
                    <div className="flex flex-wrap items-end gap-2">
                      <span className="text-xs text-gray-500 pb-1.5">{priceNote}</span>
                      <span
                        className="text-2xl font-bold text-gray-500 line-through decoration-red-500 decoration-2 pb-0.5"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {oldPrice}
                      </span>
                      <span
                        className="text-4xl font-bold gradient-text"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {price}
                      </span>
                      <button
                        type="button"
                        onClick={() => setActivePlan(plan)}
                        className="group ml-0 sm:ml-1 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[11px] font-semibold text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-white hover:shadow-[0_0_26px_rgba(34,211,238,0.25)]"
                        aria-label={`View monthly care details for ${name}`}
                      >
                        <Info className="h-3.5 w-3.5" />
                        <span>{monthlyPrice}</span>
                        <span className="hidden xl:inline text-cyan-300/70 group-hover:text-cyan-100">Monthly Care</span>
                      </button>
                    </div>
                    {highlighted && (
                      <div className="mt-2 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        Most businesses choose this
                      </div>
                    )}
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
            );
          })}
        </div>

        {activePlan && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-4"
            onClick={() => setActivePlan(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 22, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="care-plan-title"
              className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-cyan-300/20 bg-slate-950/85 p-5 shadow-[0_0_90px_rgba(59,130,246,0.28)] sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-blue-600/20 blur-3xl" />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePlan(null);
                }}
                className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-slate-950/70 text-gray-400 shadow-lg transition hover:border-cyan-300/40 hover:text-white"
                aria-label="Close monthly care details"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-200">
                  <ShieldCheck className="h-4 w-4" />
                  {activePlan.name} · {activePlan.monthlyPrice}
                </div>

                <h3 id="care-plan-title" className="pr-10 text-2xl font-bold text-white sm:text-3xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Monthly Website Care Plan
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-400">
                  A premium maintenance layer for businesses that want their website protected, monitored, and kept current after launch.
                </p>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {carePlanFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
                    >
                      <div className="mt-0.5 grid h-4.5 w-4.5 flex-shrink-0 place-items-center rounded-full bg-emerald-400/15">
                        <Check className="h-3 w-3 text-emerald-300" strokeWidth={3} />
                      </div>
                      <span className="text-[13px] leading-snug text-gray-200">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3.5">
                  <p className="text-[13px] leading-relaxed text-blue-100">
                    We handle the technical maintenance so business owners can stay focused on running their business.
                  </p>
                  <p className="mt-2 text-xs font-medium text-cyan-300">Cancel anytime. No long-term maintenance contract required.</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-10"
        >
          All packages include a free consultation. Optional monthly maintenance and support plans are available, but not required. No contracts, no hidden fees.{" "}
          <button onClick={scrollToContact} className="text-blue-400 hover:text-blue-300 underline transition-colors">
            Get in touch
          </button>{" "}
          to discuss your project.
        </motion.p>
      </div>
    </section>
  );
}

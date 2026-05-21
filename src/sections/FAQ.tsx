import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does a website take?",
    a: "Most projects are completed in 7–14 business days from kickoff. Starter sites typically take 5–7 days, Business sites 10–14 days. Custom projects vary depending on scope, but we always give you a clear timeline upfront before any work begins.",
  },
  {
    q: "Do you provide hosting?",
    a: "Yes — all our packages include fast, reliable cloud hosting for the first year. After year one, hosting is a straightforward $50/month, which covers server costs, SSL renewals, security monitoring, and automated backups. No surprise fees.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Absolutely. Website redesigns are one of our most common projects. We audit your current site, keep what's working (like your domain and any existing SEO equity), and rebuild everything else to modern standards. Your business won't miss a beat during the transition.",
  },
  {
    q: "Do you help with SEO?",
    a: "Every site we build includes foundational SEO — proper metadata, schema markup for local businesses, mobile optimization, fast load speeds, and Google Business integration. For ongoing SEO campaigns (content creation, backlink building, rank tracking), we offer a separate monthly service.",
  },
  {
    q: "Can you create booking systems?",
    a: "Yes — this is one of our most popular add-ons for service businesses. We build fully custom booking systems that let customers schedule appointments, select services, receive automated confirmations, and even pay deposits online. It connects directly to your calendar and saves hours of back-and-forth every week.",
  },
  {
    q: "Will I own my website?",
    a: "100%. When we deliver your site, you own everything — the code, the domain, the hosting account. We don't hold anything hostage. If you ever want to take your site to another developer, we'll hand over a complete package with no drama.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: open ? "rgba(30, 58, 138, 0.15)" : "rgba(15, 27, 45, 0.7)",
        border: open ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(59,130,246,0.1)",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left group"
        data-testid={`faq-button-${index}`}
      >
        <span className="text-white font-semibold text-sm pr-4 group-hover:text-blue-300 transition-colors" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {q}
        </span>
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            background: open ? "rgba(59,130,246,0.3)" : "rgba(59,130,246,0.1)",
            border: open ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(59,130,246,0.2)",
          }}
        >
          {open ? (
            <Minus className="w-3.5 h-3.5 text-blue-400" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-blue-400" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-blue-900/40 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 relative" style={{ background: "linear-gradient(180deg, #060d1a 0%, #0b1220 100%)" }}>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">FAQ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Common{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know before getting started.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Layers, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We learn your business, goals, and competitors. Understanding your market lets us design a site that positions you as the obvious choice.",
    color: "from-blue-600 to-indigo-600",
    glow: "rgba(99,102,241,0.4)",
  },
  {
    number: "02",
    icon: Layers,
    title: "Design",
    description: "We craft a custom design tailored to your brand and your customers. You see mockups before a single line of code is written.",
    color: "from-blue-500 to-cyan-500",
    glow: "rgba(6,182,212,0.4)",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "Your site is built with clean, fast code. Mobile-first, SEO-optimized, and tested across every browser and device.",
    color: "from-cyan-500 to-teal-500",
    glow: "rgba(20,184,166,0.4)",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description: "We handle the technical launch — hosting, SSL, domain setup — and hand you a site that's live, fast, and ready to generate leads.",
    color: "from-violet-600 to-purple-500",
    glow: "rgba(139,92,246,0.4)",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #060d1a 0%, #0b1220 100%)" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">How We Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            From Idea to{" "}
            <span className="gradient-text">Live Website</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A streamlined process that gets you online fast — without the headaches.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-blue-900/40">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 origin-left"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon: Icon, title, description, color, glow }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <motion.div
                  animate={inView ? { boxShadow: [`0 0 0px ${glow}`, `0 0 30px ${glow}`, `0 0 15px ${glow}`] } : {}}
                  transition={{ delay: i * 0.15 + 0.8, duration: 0.6 }}
                  className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#0b1220] border border-blue-500/40 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-blue-400">{number}</span>
                  </div>
                </motion.div>

                {/* Vertical connector (mobile) */}
                <div className="lg:hidden w-0.5 h-8 bg-blue-900/40 mb-6 -mt-2" />

                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
            <div className="text-gray-300 text-sm">Typical timeline:</div>
            <div className="flex items-center gap-3">
              {["Discovery: 1-2 days", "Design: 3-5 days", "Dev: 5-7 days", "Launch: 1 day"].map((t) => (
                <div key={t} className="px-3 py-1 rounded-full bg-blue-900/40 text-blue-300 text-xs font-medium hidden sm:block">{t}</div>
              ))}
              <div className="sm:hidden text-cyan-400 font-semibold text-sm">7–14 days total</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

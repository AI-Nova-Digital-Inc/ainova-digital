import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code2, CalendarCheck, BarChart3, Bot, Server } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Pixel-perfect designs that communicate trust and quality. We craft visuals that instantly separate you from every competitor in your market.",
    color: "from-blue-500 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: Code2,
    title: "Website Development",
    description: "Clean, fast, and mobile-ready code built on modern frameworks. Your site loads in under a second and works flawlessly on every device.",
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(6,182,212,0.3)",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    description: "Turn your website into a lead machine. Online scheduling lets customers book directly — even at 2am when your competitors are closed.",
    color: "from-cyan-500 to-teal-400",
    glow: "rgba(20,184,166,0.3)",
  },
  {
    icon: BarChart3,
    title: "SEO Optimization",
    description: "Show up when local customers search for your services. We build sites that rank, with proper metadata, schema markup, and page speed.",
    color: "from-violet-600 to-purple-500",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description: "Automated follow-ups, contact routing, and quote tools that save you hours every week and ensure no lead falls through the cracks.",
    color: "from-blue-500 to-violet-500",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "We handle everything post-launch — fast cloud hosting, SSL certificates, automatic backups, and priority support when you need it.",
    color: "from-cyan-600 to-blue-500",
    glow: "rgba(59,130,246,0.3)",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 relative" style={{ background: "linear-gradient(180deg, #0b1220 0%, #080f1c 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-50" />
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
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">What We Build</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Everything Your Business Needs{" "}
            <span className="gradient-text">Online</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From a stunning first impression to a fully automated lead funnel — we build it all.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, description, color, glow }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative rounded-2xl p-6 cursor-default"
              style={{
                background: "rgba(15, 27, 45, 0.8)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
              data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: `0 0 40px ${glow}`,
                  border: `1px solid ${glow}`,
                }}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
              </div>

              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

              {/* Hover bottom bar */}
              <div
                className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

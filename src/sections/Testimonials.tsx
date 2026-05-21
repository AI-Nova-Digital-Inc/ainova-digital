import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike Johnson",
    role: "Owner, Johnson Plumbing",
    initials: "MJ",
    color: "from-blue-600 to-cyan-500",
    quote: "AI Nova built us a website that looks more professional than any big plumbing company in the city. Our leads doubled in the first month. Every dollar was worth it.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Owner, ClimaCore HVAC",
    initials: "SC",
    color: "from-cyan-600 to-teal-500",
    quote: "We were skeptical at first — we've been burned by web agencies before. But our new site gets compliments from every single customer. Best investment we've made in 5 years.",
    rating: 5,
  },
  {
    name: "Carlos Rivera",
    role: "Owner, RoofMax Contractors",
    initials: "CR",
    color: "from-violet-600 to-purple-500",
    quote: "The process was seamless. Within 2 weeks we had a site that we're proud to show every customer. We used to be embarrassed giving out our web address. Not anymore.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "Owner, PureGleam Cleaning",
    initials: "LP",
    color: "from-pink-600 to-rose-500",
    quote: "Online bookings tripled in 6 weeks. The site runs itself — customers book, pay deposits, and get reminders automatically. I saved 10 hours a week just from that.",
    rating: 5,
  },
  {
    name: "Derek Thompson",
    role: "Owner, Titan Ridge Construction",
    initials: "DT",
    color: "from-green-600 to-emerald-500",
    quote: "We closed $85,000 in new projects in Q1 directly from the website. I never thought a website could actually generate that kind of revenue. These guys know their stuff.",
    rating: 5,
  },
  {
    name: "Anita Williams",
    role: "Owner, GreenEdge Landscaping",
    initials: "AW",
    color: "from-amber-600 to-orange-500",
    quote: "From day one, AI Nova felt like partners, not vendors. They pushed back when our ideas weren't right, educated us on what actually converts, and delivered on every promise.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0b1220 0%, #060d1a 100%)" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
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
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Client Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            What Our Clients{" "}
            <span className="gradient-text">Actually Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real business owners. Real results. No made-up testimonials.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, initials, color, quote, rating }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl p-6 relative"
              style={{
                background: "rgba(15, 27, 45, 0.8)",
                border: "1px solid rgba(59,130,246,0.12)",
              }}
              data-testid={`card-testimonial-${i}`}
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-5 text-5xl leading-none text-blue-500/20 font-serif select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-5 relative">"{quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {initials}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-gray-500 text-xs">{role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

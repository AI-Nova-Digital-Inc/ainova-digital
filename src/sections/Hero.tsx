import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Search, Zap, TrendingUp, ChevronDown, Star } from "lucide-react";

const trustBadges = [
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: Search, label: "SEO Ready" },
  { icon: Zap, label: "Fast Loading" },
  { icon: TrendingUp, label: "Built for Leads" },
];

const WORKER_PHOTO = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80";

function DeviceMockup() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 520 }}>

      {/* Ambient glow behind devices */}
      <div className="absolute w-80 h-60 rounded-full blur-[90px] bg-blue-600/20 top-16 left-1/2 -translate-x-1/2" />
      <div className="absolute w-48 h-48 rounded-full blur-[70px] bg-cyan-500/15 bottom-10 right-10 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* ── LAPTOP ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-20 z-10"
        style={{ top: 30 }}
      >
        {/* Screen + bezel */}
        <div
          className="relative rounded-t-xl overflow-hidden mx-auto"
          style={{
            width: 420,
            height: 262,
            background: "#0a0f1e",
            border: "3px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
            boxShadow: "0 0 50px rgba(59,130,246,0.25), inset 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-700" />

          {/* Website inside screen */}
          <div className="w-full h-full overflow-hidden" style={{ marginTop: 8 }}>
            {/* Nav */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-[#0b1a35]/95 backdrop-blur-sm">
              <span className="text-[8px] font-bold text-white">HydroForce Plumbing</span>
              <div className="flex gap-2 text-[6px] text-white/40">
                <span>Services</span><span>About</span><span>Contact</span>
              </div>
              <div className="bg-blue-600 text-white text-[6px] font-bold px-2 py-0.5 rounded">Get Quote</div>
            </div>

            {/* Hero with real worker photo */}
            <div className="relative overflow-hidden" style={{ height: 150 }}>
              <img
                src={WORKER_PHOTO}
                alt="Trades professional"
                className="w-full h-full object-cover object-top"
                style={{ filter: "brightness(0.38)" }}
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(14,30,70,0.85) 0%, rgba(0,0,0,0.2) 100%)" }} />
              <div className="absolute inset-0 flex flex-col justify-center px-4">
                <div className="text-[7px] text-blue-300 uppercase tracking-widest mb-1">Professional Services</div>
                <div className="text-[13px] font-black text-white leading-tight mb-1.5">HydroForce<br />Plumbing</div>
                <div className="flex gap-1.5">
                  <div className="bg-blue-600 text-white text-[7px] font-bold px-2.5 py-1 rounded-lg">Get a Quote</div>
                  <div className="border border-white/25 text-white/70 text-[7px] px-2.5 py-1 rounded-lg">Our Services</div>
                </div>
              </div>
            </div>

            {/* Service thumbnails at bottom */}
            <div className="grid grid-cols-4 gap-0.5 p-1.5" style={{ background: "#080f1c" }}>
              {[
                { label: "Emergency Repair", bg: "from-blue-900 to-blue-800" },
                { label: "Drain Cleaning",   bg: "from-slate-800 to-slate-700" },
                { label: "Water Heater",     bg: "from-blue-800 to-cyan-900" },
                { label: "Installation",     bg: "from-slate-700 to-slate-600" },
              ].map((s) => (
                <div key={s.label} className={`rounded h-14 bg-gradient-to-br ${s.bg} flex items-end p-1`}>
                  <span className="text-[6px] text-white/60 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keyboard base */}
        <div
          className="mx-auto rounded-b-xl"
          style={{
            width: 420,
            height: 14,
            background: "linear-gradient(180deg, #1a2035 0%, #0f1524 100%)",
            border: "3px solid rgba(255,255,255,0.08)",
            borderTop: "none",
          }}
        />
        {/* Trackpad area */}
        <div
          className="mx-auto mt-0.5 rounded-xl"
          style={{
            width: 480,
            height: 10,
            background: "linear-gradient(180deg, #141d2e 0%, #0c1220 100%)",
            border: "2px solid rgba(255,255,255,0.06)",
          }}
        />
      </motion.div>

      {/* ── PHONE (floating upper-right) ── */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-2 z-20"
        style={{ top: 20 }}
      >
        <div
          className="rounded-[24px] overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          style={{
            width: 110,
            background: "#0a0f1e",
            border: "2px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* Notch */}
          <div className="h-4 flex items-center justify-center" style={{ background: "#060d1a" }}>
            <div className="w-10 h-2 rounded-full bg-black" />
          </div>

          {/* Mobile site */}
          <div>
            {/* Mobile nav */}
            <div className="flex items-center justify-between px-2 py-1.5 bg-[#0b1a35]">
              <span className="text-[6px] font-bold text-white">HydroForce</span>
              <div className="bg-blue-600 text-white text-[5px] px-1.5 py-0.5 rounded">Quote</div>
            </div>

            {/* Mobile hero with real photo */}
            <div className="relative overflow-hidden" style={{ height: 90 }}>
              <img
                src={WORKER_PHOTO}
                alt="Trades professional"
                className="w-full h-full object-cover object-top"
                style={{ filter: "brightness(0.35)" }}
              />
              <div className="absolute inset-0" style={{ background: "rgba(14,30,70,0.7)" }} />
              <div className="absolute inset-0 flex flex-col justify-center px-2">
                <div className="text-[8px] font-black text-white leading-tight mb-1">HydroForce<br />Plumbing</div>
                <div className="bg-blue-600 text-white text-[6px] font-bold px-2 py-0.5 rounded inline-block w-fit">Get a Quote</div>
              </div>
            </div>

            {/* Mobile stats */}
            <div className="grid grid-cols-3 gap-0.5 px-1.5 py-1.5 bg-[#0a1628]">
              {[["4.9★", "Reviews"], ["24/7", "Emergency"], ["<30m", "Response"]].map(([v, l]) => (
                <div key={l} className="text-center bg-blue-900/30 rounded py-1">
                  <div className="text-[7px] font-bold text-blue-300">{v}</div>
                  <div className="text-[5px] text-white/30">{l}</div>
                </div>
              ))}
            </div>

            {/* Mobile services */}
            <div className="px-1.5 py-1.5 bg-[#060d1a] space-y-1">
              {["Emergency Repair", "Drain Cleaning", "Water Heater"].map((s) => (
                <div key={s} className="flex items-center gap-1.5 bg-blue-900/20 rounded px-1.5 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <span className="text-[6px] text-white/70">{s}</span>
                </div>
              ))}
            </div>

            {/* CTA strip */}
            <div className="bg-blue-700 py-1.5 text-center text-[6px] font-bold text-white">
              Call Now →
            </div>
          </div>

          {/* Home bar */}
          <div className="h-3 flex items-center justify-center" style={{ background: "#060d1a" }}>
            <div className="w-10 h-0.5 rounded-full bg-white/20" />
          </div>
        </div>
      </motion.div>

      {/* ── Floating analytics card — sits above phone, inset from right ── */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute rounded-xl p-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(59,130,246,0.2)]"
        style={{
          top: 0, right: 120, width: 152,
          background: "rgba(15,27,45,0.95)",
          border: "1px solid rgba(59,130,246,0.3)",
        }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          </div>
          <span className="text-[9px] text-gray-300 font-medium">Monthly Leads</span>
        </div>
        <div className="text-xl font-bold text-white mb-1">+347%</div>
        <div className="flex gap-0.5 mb-1">
          {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-blue-500/30" style={{ height: h / 10 + 3 + "px" }} />
          ))}
        </div>
        <div className="text-[9px] text-green-400">vs last month</div>
      </motion.div>

      {/* ── Floating speed card ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute rounded-xl p-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(6,182,212,0.2)]"
        style={{
          bottom: 50, left: 10, width: 148,
          background: "rgba(15,27,45,0.95)",
          border: "1px solid rgba(6,182,212,0.3)",
        }}
      >
        <div className="text-[9px] text-gray-400 mb-1">Page Speed</div>
        <div className="text-xl font-bold text-cyan-400">98/100</div>
        <div className="mt-1.5 h-1.5 rounded-full bg-[#1a2744] overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98%" }}
            transition={{ delay: 1, duration: 1.5 }}
            className="h-full bg-gradient-to-r from-cyan-500 to-green-400 rounded-full"
          />
        </div>
        <div className="text-[9px] text-gray-500 mt-1">Google PageSpeed</div>
      </motion.div>

      {/* ── Floating reviews card ── */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute rounded-xl p-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(234,179,8,0.1)]"
        style={{
          bottom: 20, right: 120, width: 132,
          background: "rgba(15,27,45,0.95)",
          border: "1px solid rgba(234,179,8,0.2)",
        }}
      >
        <div className="flex gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
        </div>
        <div className="text-white text-xs font-bold">4.9 / 5.0</div>
        <div className="text-[9px] text-gray-500 mt-0.5">312 Google reviews</div>
      </motion.div>

    </div>
  );
}

export default function Hero() {
  const scrollToServices  = () => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  const scrollToContact   = () => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToPortfolio = () => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
      style={{ background: "linear-gradient(180deg, #060d1a 0%, #0b1220 50%, #0b1220 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-100" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* ── Left content ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs text-cyan-300 font-medium tracking-wide">Serving Trades Businesses Across North America</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get More Calls.{" "}
              <span className="gradient-text">Win More Jobs.</span>{" "}
              Dominate Your Market.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We build premium, high-converting websites for trades and service businesses across North America. No templates. No shortcuts. Just results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={scrollToPortfolio}
                data-testid="button-view-work"
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)] hover:scale-105 flex items-center gap-2 justify-center"
              >
                View Our Work
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={scrollToContact}
                data-testid="button-free-quote"
                className="px-7 py-3.5 border border-blue-500/40 text-blue-300 hover:text-white hover:border-blue-400 hover:bg-blue-900/20 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Free Quote
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0f1b2d] border border-blue-900/40 text-gray-300 text-xs font-medium"
                >
                  <Icon className="w-3 h-3 text-cyan-400" />
                  {label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Laptop + Phone ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <DeviceMockup />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

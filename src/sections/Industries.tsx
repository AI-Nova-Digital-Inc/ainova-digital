import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Home, Thermometer, Leaf, Sparkles, HardHat, Zap, Truck, X, Phone, Star, CheckCircle, Clock, Shield, ArrowRight, MapPin, Calendar, Droplets, Wind, Scissors, Bolt } from "lucide-react";

const industries = [
  { icon: Wrench,      name: "Plumbing",      tagline: "Emergency & Residential Services",    color: "from-blue-600 to-blue-400",     bg: "bg-blue-900/20" },
  { icon: Home,        name: "Roofing",        tagline: "Residential & Commercial Roofing",    color: "from-orange-600 to-amber-500",  bg: "bg-orange-900/20" },
  { icon: Thermometer, name: "HVAC",           tagline: "Heating, Cooling & Air Quality",      color: "from-cyan-600 to-teal-400",     bg: "bg-cyan-900/20" },
  { icon: Leaf,        name: "Landscaping",    tagline: "Lawn Care & Outdoor Design",          color: "from-green-600 to-emerald-400", bg: "bg-green-900/20" },
  { icon: Sparkles,    name: "Cleaning",       tagline: "Residential & Commercial Cleaning",   color: "from-violet-600 to-purple-400", bg: "bg-violet-900/20" },
  { icon: HardHat,     name: "Construction",   tagline: "General Contracting & Build-Outs",    color: "from-yellow-600 to-amber-400",  bg: "bg-yellow-900/20" },
  { icon: Zap,         name: "Electrician",    tagline: "Electrical Installation & Repair",    color: "from-yellow-500 to-orange-400", bg: "bg-yellow-900/20" },
  { icon: Truck,       name: "Moving",         tagline: "Local & Long Distance Moving",        color: "from-red-600 to-rose-500",      bg: "bg-red-900/20" },
];

function PlumbingDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#0a1628] flex flex-col">
      <div className="px-6 py-5 bg-gradient-to-r from-blue-900 to-blue-800 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Droplets className="w-5 h-5 text-blue-300" />
            <span className="text-white font-bold text-lg">HydroForce Plumbing</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            <span className="text-white/60 text-xs ml-1">4.9 (312 reviews)</span>
          </div>
        </div>
        <div className="bg-red-500 text-white text-xs font-bold px-3 py-2 rounded-lg text-center animate-pulse">
          <div>24/7</div>
          <div>EMERGENCY</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1">
        <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4 mb-4 flex items-center gap-3">
          <Phone className="w-5 h-5 text-red-400 shrink-0" />
          <div className="flex-1">
            <div className="text-red-300 text-xs font-semibold">BURST PIPE? BLOCKED DRAIN?</div>
            <div className="text-white font-bold text-base">Call Now — We're 30 Min Away</div>
          </div>
          <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg">CALL</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: "Emergency Repair", icon: "🔧", time: "30 min response" },
            { label: "Drain Cleaning",   icon: "🚿", time: "Same day available" },
            { label: "Water Heater",     icon: "🔥", time: "Install in 2 hrs" },
            { label: "Leak Detection",   icon: "💧", time: "Free diagnosis" },
          ].map((s) => (
            <div key={s.label} className="bg-blue-900/40 rounded-lg p-3 border border-blue-800/40">
              <div className="text-base mb-1">{s.icon}</div>
              <div className="text-white text-xs font-semibold">{s.label}</div>
              <div className="text-blue-300 text-[10px]">{s.time}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-white/50">
          <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> Licensed & Insured</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Serving Greater Metro</span>
          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Free Estimates</span>
        </div>
      </div>
    </div>
  );
}

function RoofingDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#1a0a00] flex flex-col">
      <div className="relative px-6 py-5 overflow-hidden" style={{ background: "linear-gradient(135deg, #7c2d12, #431407)" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20" style={{ background: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><polygon points=%220,100 100,0 100,100%22 fill=%22%23f59e0b%22/></svg>')" }} />
        <div className="flex items-center gap-2 mb-2">
          <Home className="w-5 h-5 text-amber-400" />
          <span className="text-white font-bold text-lg">RoofMax Contractors</span>
        </div>
        <div className="text-amber-200/80 text-sm">Storm Damage? We Handle Insurance Claims.</div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#1c0e04]">
        <div className="bg-amber-900/30 border border-amber-500/30 rounded-xl p-3 mb-4">
          <div className="text-amber-300 text-xs font-bold mb-2 uppercase tracking-wide">Before & After — Recent Projects</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg overflow-hidden">
              <div className="h-16 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center text-xs text-white/40">BEFORE</div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <div className="h-16 bg-gradient-to-br from-amber-800 to-orange-700 flex items-center justify-center text-xs text-white/60 font-semibold">AFTER ✓</div>
            </div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {[
            { label: "Free Storm Damage Inspection", badge: "Most Popular" },
            { label: "Full Roof Replacement", badge: "Financing Available" },
            { label: "Emergency Tarping & Repair", badge: "Same Day" },
          ].map((s) => (
            <div key={s.label} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/10">
              <span className="text-white text-xs">{s.label}</span>
              <span className="text-[9px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">{s.badge}</span>
            </div>
          ))}
        </div>
        <div className="bg-amber-600 text-white text-center text-sm font-bold py-2.5 rounded-xl">
          Get Free Inspection →
        </div>
      </div>
    </div>
  );
}

function HvacDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#001f26] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-cyan-900 to-teal-900 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Wind className="w-5 h-5 text-cyan-300" />
            <span className="text-white font-bold text-lg">ClimaCore HVAC</span>
          </div>
          <div className="text-cyan-200/60 text-xs mt-0.5">Comfort You Can Count On</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-cyan-300">72°</div>
          <div className="text-[10px] text-white/50">Inside · Feels great</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#001f26]">
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-cyan-900/40 border border-cyan-700/30 rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">❄️</div>
            <div className="text-white text-xs font-semibold">AC Tune-Up</div>
            <div className="text-cyan-300 text-xs mt-0.5">$89 Special</div>
            <div className="mt-2 bg-cyan-600/80 text-white text-[10px] py-1 rounded-lg">Book Now</div>
          </div>
          <div className="bg-orange-900/40 border border-orange-700/30 rounded-xl p-3 text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="text-white text-xs font-semibold">Furnace Check</div>
            <div className="text-orange-300 text-xs mt-0.5">$99 Special</div>
            <div className="mt-2 bg-orange-600/80 text-white text-[10px] py-1 rounded-lg">Book Now</div>
          </div>
        </div>
        <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10">
          <div className="text-white/60 text-xs mb-2">📅 Next Available Appointment</div>
          <div className="grid grid-cols-3 gap-2">
            {["Today 2pm", "Today 4pm", "Tomorrow 9am"].map((slot) => (
              <div key={slot} className="bg-cyan-600/20 border border-cyan-500/30 rounded-lg py-1.5 text-center text-[10px] text-cyan-300">{slot}</div>
            ))}
          </div>
        </div>
        <div className="flex justify-between text-xs text-white/40">
          <span>✓ NATE Certified</span>
          <span>✓ 100% Satisfaction</span>
          <span>✓ 0% Financing</span>
        </div>
      </div>
    </div>
  );
}

function LandscapingDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#071a0e] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-green-900 to-emerald-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-300" />
              <span className="text-white font-bold text-lg">GreenEdge Landscaping</span>
            </div>
            <div className="text-green-200/60 text-xs mt-0.5">Your Yard, Elevated.</div>
          </div>
          <div className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg">Free Quote</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1">
        <div className="mb-3">
          <div className="text-green-400 text-xs font-bold uppercase tracking-wide mb-2">Our Work — Recent Transforms</div>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Backyard Reno", color: "from-green-800 to-emerald-700" },
              { label: "Garden Design", color: "from-emerald-800 to-teal-700" },
              { label: "Sod Install",   color: "from-green-700 to-lime-800" },
            ].map((p) => (
              <div key={p.label} className={`h-16 rounded-lg bg-gradient-to-br ${p.color} flex items-end p-1.5`}>
                <span className="text-[9px] text-white/70">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2 mb-3">
          {[
            { service: "Weekly Lawn Maintenance", price: "From $60/visit" },
            { service: "Full Garden Redesign",    price: "Custom Quote" },
            { service: "Tree & Shrub Trimming",   price: "From $120" },
            { service: "Irrigation Systems",      price: "From $800" },
          ].map((s) => (
            <div key={s.service} className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-white text-xs">{s.service}</span>
              <span className="text-green-400 text-xs font-semibold">{s.price}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-600 text-white text-center text-sm font-bold py-2 rounded-xl">
          Schedule Free Yard Assessment
        </div>
      </div>
    </div>
  );
}

function CleaningDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#0e0520] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-violet-900 to-purple-900 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-300" />
            <span className="text-white font-bold text-lg">PureGleam Cleaning</span>
          </div>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            <span className="text-white/50 text-xs ml-1">Spotless. Every Time.</span>
          </div>
        </div>
        <div className="text-violet-300 text-xs text-right">
          <div className="font-bold">Next slot:</div>
          <div>Tomorrow 10am</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#0e0520]">
        <div className="bg-violet-900/30 rounded-xl p-3 mb-4 border border-violet-700/30">
          <div className="text-violet-300 text-xs font-bold mb-2">📋 Instant Online Booking</div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="bg-white/5 rounded-lg px-2 py-1.5 text-[10px] text-white/60 border border-white/10">🏠 Residential</div>
            <div className="bg-violet-600/30 rounded-lg px-2 py-1.5 text-[10px] text-violet-200 border border-violet-500/40 font-semibold">✓ Commercial</div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
              <div key={d} className={`rounded py-1 text-center text-[9px] ${i === 2 ? "bg-violet-500 text-white font-bold" : "bg-white/5 text-white/40"}`}>{d}</div>
            ))}
          </div>
        </div>
        <div className="space-y-2 mb-4">
          {[
            { name: "Deep Clean",      desc: "3–4 hrs · Whole home",    price: "$180" },
            { name: "Regular Clean",   desc: "2 hrs · Maintain & shine", price: "$95" },
            { name: "Move-Out Clean",  desc: "Full sanitize & polish",   price: "$220" },
          ].map((s) => (
            <div key={s.name} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
              <div>
                <div className="text-white text-xs font-semibold">{s.name}</div>
                <div className="text-white/40 text-[10px]">{s.desc}</div>
              </div>
              <div className="text-violet-300 font-bold text-sm">{s.price}</div>
            </div>
          ))}
        </div>
        <div className="bg-violet-600 text-white text-center text-sm font-bold py-2 rounded-xl">
          Book Your Clean →
        </div>
      </div>
    </div>
  );
}

function ConstructionDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#0f1200] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-yellow-900 to-amber-900 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <HardHat className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold text-lg">TitanRidge Construction</span>
          </div>
          <div className="text-yellow-200/60 text-xs mt-0.5">We Build What Others Dream.</div>
        </div>
        <div className="text-right">
          <div className="text-yellow-300 font-bold text-xl">$2.4M+</div>
          <div className="text-white/40 text-[10px]">Projects Delivered</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#0f1200]">
        <div className="mb-3">
          <div className="text-yellow-400/70 text-xs font-bold uppercase tracking-wide mb-2">Active Projects</div>
          <div className="space-y-2">
            {[
              { name: "Riverside Kitchen Reno", progress: 75, status: "On Schedule" },
              { name: "Summit Office Build-Out", progress: 45, status: "Framing" },
              { name: "Lakeview Deck Addition",  progress: 90, status: "Final Touches" },
            ].map((p) => (
              <div key={p.name} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="flex justify-between mb-1.5">
                  <span className="text-white text-xs font-medium">{p.name}</span>
                  <span className="text-yellow-400 text-[10px]">{p.status}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full" style={{ width: `${p.progress}%` }} />
                </div>
                <div className="text-white/30 text-[9px] mt-0.5">{p.progress}% Complete</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "15+", l: "Yrs Experience" }, { v: "200+", l: "Projects Done" }, { v: "100%", l: "Licensed & Bonded" }].map((s) => (
            <div key={s.l} className="bg-yellow-900/30 rounded-lg p-2 text-center border border-yellow-700/20">
              <div className="text-yellow-300 font-bold text-sm">{s.v}</div>
              <div className="text-white/40 text-[9px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ElectricianDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#0d0e00] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-yellow-800 to-orange-900 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Bolt className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-bold text-lg">VoltPro Electric</span>
          </div>
          <div className="text-yellow-200/60 text-xs mt-0.5">Safe. Certified. Fast.</div>
        </div>
        <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-2 rounded-lg text-center">
          <div>AVAILABLE</div>
          <div>NOW</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#0d0e00]">
        <div className="bg-yellow-900/30 border border-yellow-700/30 rounded-xl p-3 mb-4 flex items-center gap-3">
          <div className="text-2xl">⚡</div>
          <div>
            <div className="text-yellow-300 text-xs font-bold">POWER OUT? SPARKS? TRIPPING?</div>
            <div className="text-white text-sm font-semibold">Emergency response in 45 min</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { icon: "🔌", label: "Panel Upgrades",   sub: "100A–200A upgrade" },
            { icon: "🏠", label: "Whole Home Wiring", sub: "New builds & rewires" },
            { icon: "🚗", label: "EV Charger Install", sub: "Level 2 certified" },
            { icon: "💡", label: "Lighting & Fixtures", sub: "Interior & exterior" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-xl p-3 border border-yellow-900/30 hover:border-yellow-500/30 transition-colors">
              <div className="text-lg mb-1">{s.icon}</div>
              <div className="text-white text-xs font-semibold">{s.label}</div>
              <div className="text-yellow-400/70 text-[10px]">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-3">
          {["ESA Certified", "Fully Insured", "5-Star Rated", "Free Estimates"].map((b) => (
            <div key={b} className="flex-1 bg-yellow-900/20 rounded-lg py-1 text-center text-[9px] text-yellow-300/70 border border-yellow-800/30">{b}</div>
          ))}
        </div>
        <div className="bg-yellow-500 text-black text-center text-sm font-bold py-2.5 rounded-xl">
          Book a Licensed Electrician →
        </div>
      </div>
    </div>
  );
}

function MovingDemo() {
  return (
    <div className="h-[420px] overflow-hidden bg-[#150005] flex flex-col">
      <div className="px-6 py-4 bg-gradient-to-r from-red-900 to-rose-900 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Truck className="w-5 h-5 text-red-300" />
            <span className="text-white font-bold text-lg">SwiftMove Pros</span>
          </div>
          <div className="text-red-200/60 text-xs mt-0.5">On Time. Every Time.</div>
        </div>
        <div className="text-right">
          <div className="text-white/50 text-[10px]">Starting at</div>
          <div className="text-red-300 font-bold text-xl">$249</div>
        </div>
      </div>
      <div className="px-6 py-4 flex-1 bg-[#150005]">
        <div className="bg-red-900/30 rounded-xl p-3 mb-4 border border-red-700/30">
          <div className="text-red-300 text-xs font-bold mb-2">🚚 Get Your Instant Quote</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 rounded-lg px-3 py-2 text-xs text-white/60 border border-white/10">
              <div className="text-[9px] text-white/30 mb-0.5">Moving From</div>
              1-Bedroom Apt
            </div>
            <div className="bg-white/5 rounded-lg px-3 py-2 text-xs text-white/60 border border-white/10">
              <div className="text-[9px] text-white/30 mb-0.5">Moving To</div>
              3-Bedroom Home
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between bg-white/5 rounded-lg px-3 py-2 border border-white/10">
            <div className="text-xs text-white/60 flex items-center gap-2"><Calendar className="w-3 h-3" /> Move Date</div>
            <div className="text-xs text-red-300 font-semibold">Select Date →</div>
          </div>
          <div className="mt-2 bg-red-600/80 text-white text-center text-xs font-bold py-2 rounded-lg">Calculate My Quote</div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { icon: "📦", label: "Packing", desc: "Full or partial" },
            { icon: "🏙️", label: "Local",   desc: "Same-day moves" },
            { icon: "🗺️", label: "Long Dist", desc: "Cross-country" },
          ].map((s) => (
            <div key={s.label} className="bg-white/5 rounded-xl p-2 text-center border border-white/10">
              <div className="text-base mb-1">{s.icon}</div>
              <div className="text-white text-xs font-semibold">{s.label}</div>
              <div className="text-white/40 text-[9px]">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/40">
          <span>✓ Licensed & Insured</span>
          <span>✓ No Hidden Fees</span>
          <span>✓ Guaranteed On-Time</span>
        </div>
      </div>
    </div>
  );
}

const demoComponents: Record<string, React.ReactNode> = {
  Plumbing:     <PlumbingDemo />,
  Roofing:      <RoofingDemo />,
  HVAC:         <HvacDemo />,
  Landscaping:  <LandscapingDemo />,
  Cleaning:     <CleaningDemo />,
  Construction: <ConstructionDemo />,
  Electrician:  <ElectricianDemo />,
  Moving:       <MovingDemo />,
};

const demoUrls: Record<string, string> = {
  Plumbing:     "hydroforce-plumbing.com",
  Roofing:      "roofmaxcontractors.com",
  HVAC:         "climacorehvac.com",
  Landscaping:  "greenedgelandscaping.com",
  Cleaning:     "puregleamcleaning.com",
  Construction: "titanridgeconstruction.com",
  Electrician:  "voltproelectric.com",
  Moving:       "swiftmovepros.com",
};

const demoCompanies: Record<string, string> = {
  Plumbing:     "HydroForce Plumbing",
  Roofing:      "RoofMax Contractors",
  HVAC:         "ClimaCore HVAC",
  Landscaping:  "GreenEdge Landscaping",
  Cleaning:     "PureGleam Cleaning",
  Construction: "TitanRidge Construction",
  Electrician:  "VoltPro Electric",
  Moving:       "SwiftMove Pros",
};

function DemoModal({ industry, onClose }: { industry: typeof industries[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
        style={{ background: "#0b1220" }}
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141f32] border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="ml-2 px-3 py-1 bg-[#0b1220] rounded-md text-xs text-gray-400">
              🔒 {demoUrls[industry.name]}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

        {/* Industry-specific demo */}
        {demoComponents[industry.name]}

        {/* Footer */}
        <div className="px-6 py-4 flex items-center justify-between bg-[#0f1b2d] border-t border-white/10">
          <div>
            <div className="text-white font-semibold text-sm">{demoCompanies[industry.name]}</div>
            <div className="text-gray-500 text-xs mt-0.5">Sample of what your website could look like</div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors"
            data-testid="button-get-this-site"
          >
            Get This Site
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Industries() {
  const [activeDemo, setActiveDemo] = useState<typeof industries[0] | null>(null);

  return (
    <section id="industries" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #080f1c 0%, #0b1220 100%)" }}>
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Built for{" "}
            <span className="gradient-text">Every Trade</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We speak your industry's language. Click any trade to preview a real website we'd build for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl p-6 cursor-pointer overflow-hidden"
                style={{
                  background: "rgba(15, 27, 45, 0.8)",
                  border: "1px solid rgba(59,130,246,0.12)",
                }}
                onClick={() => setActiveDemo(industry)}
                data-testid={`card-industry-${industry.name.toLowerCase()}`}
              >
                <div
                  className={`absolute inset-0 ${industry.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-400`}
                />

                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="relative text-lg font-bold text-white mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {industry.name}
                </h3>
                <p className="relative text-gray-500 text-xs mb-4">{industry.tagline}</p>

                <button
                  className={`relative w-full py-2 rounded-lg bg-gradient-to-r ${industry.color} text-white text-xs font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-300 shadow-sm flex items-center justify-center gap-1.5`}
                >
                  Preview Website
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeDemo && <DemoModal industry={activeDemo} onClose={() => setActiveDemo(null)} />}
      </AnimatePresence>
    </section>
  );
}

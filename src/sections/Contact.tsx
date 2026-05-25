import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowRight, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const industries = [
  "Plumbing", "HVAC", "Roofing", "Landscaping",
  "Cleaning", "Construction", "Electrical", "Moving", "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "", businessType: "", phone: "", email: "", details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));

    const res = await fetch("https://formspree.io/f/mykoyzgv", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0b1220 0%, #060d1a 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
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
            <span className="text-xs text-cyan-300 font-medium tracking-wide uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Build Your{" "}
            <span className="gradient-text">Website</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tell us about your business and we'll put together a free proposal within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left - Company info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl p-8" style={{ background: "rgba(15, 27, 45, 0.8)", border: "1px solid rgba(59,130,246,0.12)" }}>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                AI Nova Digital Inc
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                We specialize in building premium, high-converting websites for local service businesses across North America. No templates. No shortcuts. Just websites that work.
              </p>

              <div className="space-y-5 mb-8">
                <a
                  href="mailto:info@ainovadigital.ca"
                  className="flex items-center gap-4 group"
                  data-testid="link-email"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Email Us</div>
                    <div className="text-gray-200 text-sm font-medium group-hover:text-blue-300 transition-colors">info@ainovadigital.ca</div>
                  </div>
                </a>

                <a
                  href="tel:+14319963005"
                  className="flex items-center gap-4 group"
                  data-testid="link-phone"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">Call Us</div>
                    <div className="text-gray-200 text-sm font-medium group-hover:text-cyan-300 transition-colors">431-996-3005</div>
                  </div>
                </a>
              </div>

              {/* Social icons */}
              <div>
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Follow Us</div>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", color: "hover:text-pink-400 hover:border-pink-500/40" },
                    { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-500/40" },
                    { icon: Twitter, label: "Twitter", color: "hover:text-sky-400 hover:border-sky-500/40" },
                    { icon: Facebook, label: "Facebook", color: "hover:text-blue-500 hover:border-blue-600/40" },
                  ].map(({ icon: Icon, label, color }) => (
                    <button
                      key={label}
                      className={`w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center text-gray-500 transition-all duration-300 ${color}`}
                      aria-label={label}
                      data-testid={`button-social-${label.toLowerCase()}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-8 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-medium">We typically respond within 2 hours during business hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="rounded-2xl p-8" style={{ background: "rgba(15, 27, 45, 0.9)", border: "1px solid rgba(59,130,246,0.2)", boxShadow: "0 0 60px rgba(59,130,246,0.08)" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mx-auto mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="text-2xl"
                    >
                      ✓
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    We'll review your project details and get back to you within 2 hours with a custom proposal.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                        style={{ background: "rgba(11,18,32,0.8)", border: "1px solid rgba(59,130,246,0.2)" }}
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium">Business Type *</label>
                      <select
                        required
                        value={form.businessType}
                        onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                        style={{ background: "rgba(11,18,32,0.8)", border: "1px solid rgba(59,130,246,0.2)" }}
                        data-testid="select-business-type"
                      >
                        <option value="" style={{ background: "#0b1220" }}>Select industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind} style={{ background: "#0b1220" }}>{ind}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                        style={{ background: "rgba(11,18,32,0.8)", border: "1px solid rgba(59,130,246,0.2)" }}
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                        style={{ background: "rgba(11,18,32,0.8)", border: "1px solid rgba(59,130,246,0.2)" }}
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">Project Details</label>
                    <textarea
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      placeholder="Tell us about your business, what you need, and any specific goals for your website..."
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      style={{ background: "rgba(11,18,32,0.8)", border: "1px solid rgba(59,130,246,0.2)" }}
                      data-testid="textarea-details"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_50px_rgba(59,130,246,0.65)] flex items-center justify-center gap-2"
                    data-testid="button-submit-quote"
                  >
                    Get My Website Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-center text-gray-600 text-xs">
                    Free consultation · No commitment · Proposal in 24 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

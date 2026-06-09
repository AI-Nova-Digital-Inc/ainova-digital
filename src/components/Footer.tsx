import { motion } from "framer-motion";
import { Zap, ArrowRight, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

const quickLinks = ["Home", "Services", "Industries", "Portfolio", "Pricing", "Process", "Contact"];
const services = ["Website Design", "Website Development", "Booking Systems", "SEO Optimization", "Business Automation", "Hosting & Deployment"];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(`#${id.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#060d1a" }}>
      {/* CTA Banner */}
      <div className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(17,94,89,0.2) 100%)", borderTop: "1px solid rgba(59,130,246,0.2)", borderBottom: "1px solid rgba(59,130,246,0.1)" }}>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready to Stand Out From Every Competitor?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free consultation — we'll show you exactly what your website could look like.
            </p>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] hover:scale-105"
              data-testid="button-footer-cta"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-white font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>AI Nova</span>
                <span className="text-blue-400 font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}> Digital</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Premium websites for trades businesses across North America. No templates. No shortcuts. Just websites that work.
            </p>
            <div className="flex gap-2">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center text-gray-600 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-gray-500 hover:text-blue-300 text-sm transition-colors text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo("services")}
                    className="text-gray-500 hover:text-blue-300 text-sm transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@ainovadigital.ca" className="block text-gray-500 hover:text-blue-300 text-sm transition-colors">
                info@ainovadigital.ca
              </a>
              <a href="tel:+12044301945" className="block text-gray-500 hover:text-blue-300 text-sm transition-colors">
                204-430-1945
              </a>
              <div className="text-gray-600 text-sm">Mon-Fri, 9am-6pm EST</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2025 AI Nova Digital Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</button>
            <button className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#854836] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left: Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                  src="https://public.readdy.ai/ai/img_res/db41b62d-6e63-4298-90a8-7216d87eb749.png"
                />
                <span className="text-xl font-bold">Portfolio</span>
              </div>

              <p className="text-sm text-white/80 leading-relaxed">
                Passionate software developer creating innovative solutions and
                building exceptional digital experiences.
              </p>
            </div>

            {/* Middle: Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#projects"
                    className="text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer whitespace-nowrap"
                  >
                    About Me
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Get In Touch</h4>

              <div className="space-y-4">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line mr-3 text-lg" />
                  hello@example.com
                </a>

                <a
                  href="tel:+1234567890"
                  className="flex items-center text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line mr-3 text-lg" />
                  +1 (234) 567-890
                </a>

                <div className="flex items-center text-sm text-white/80">
                  <i className="ri-map-pin-line mr-3 text-lg" />
                  San Francisco, CA
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                {[
                  "ri-github-line",
                  "ri-linkedin-box-line",
                  "ri-twitter-line",
                  "ri-dribbble-line",
                ].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFB22C] hover:text-black transition-all cursor-pointer"
                  >
                    <i className={`${icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
              <p>© 2026 Portfolio. All rights reserved.</p>

              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#FFB22C] transition-colors cursor-pointer whitespace-nowrap mt-4 md:mt-0"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

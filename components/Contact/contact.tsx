import { Logo } from "../icons";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="bg-[#854836] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left: Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Logo />
                <span className="text-xl font-bold">Ali Kusnadin</span>
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
                    href="#project"
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
                  href="mailto:kusnadin.ali.12@gmail.com"
                  className="flex items-center text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer"
                >
                  <i className="ri-mail-line mr-3 text-lg" />
                  kusnadin.ali.12@gmail.com
                </a>

                <a
                  href="tel:+6289668161113"
                  className="flex items-center text-sm text-white/80 hover:text-[#FFB22C] transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line mr-3 text-lg" />
                  +62 896-6816-1113
                </a>

                <div className="flex items-center text-sm text-white/80">
                  <i className="ri-map-pin-line mr-3 text-lg" />
                  Bandung, Indonesia
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                {[
                  {
                    url: "https://github.com/kusnadin-ali",
                    icon: "ri-github-line",
                  },
                  {
                    url: "https://www.linkedin.com/in/kusnadin-ali/",
                    icon: "ri-linkedin-box-line",
                  },
                ].map((data) => (
                  <a
                    key={data.icon}
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFB22C] hover:text-black transition-all cursor-pointer"
                  >
                    <i className={`${data.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70 gap-4">
              <p>
                © {new Date().getFullYear()} Ali Kusnadin. All rights reserved.
              </p>

              <p className="text-white/60">
                Built with Next.js, Tailwind CSS & HeroUI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

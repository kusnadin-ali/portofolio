import { Image } from "@heroui/image";

export const About = () => {
  return (
    <section id="about">
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate software developer dedicated to creating exceptional
              digital experiences
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
                <Image alt="About Me" src="img/about.png" width={800} />
                {/*<img alt="About Me" class="w-full h-full object-cover object-top" src="width=800&amp;height=600&amp;seq=about-001&amp;orientation=landscape">*/}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#000000] mb-6">
                Hello, I'm a Software Developer
              </h3>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                With over 6 years of experience in software development, I
                specialize in building robust, scalable applications that solve
                real-world problems. My journey in tech has been driven by a
                passion for creating elegant solutions through clean code and
                innovative thinking.
              </p>
              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                I have extensive experience working with modern web
                technologies, cloud platforms, and agile methodologies.
                Throughout my career, I've had the privilege of working with
                talented teams on diverse projects, from startups to
                enterprise-level applications.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source
                projects, writing technical articles, and staying updated with
                the latest industry trends. I believe in continuous learning and
                sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

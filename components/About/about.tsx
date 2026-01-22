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
              Backend-oriented developer focused on building scalable and
              well-structured web applications
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
                Backend-oriented developer focused on <b>Java Spring Boot</b>,
                with experience using
                <b> Angular</b> and <b>Next.js</b> to build full-stack web
                applications. Currently working professionally while preparing
                to continue formal education to strengthen long-term technical
                foundations.
              </p>

              <p className="text-base text-gray-600 mb-4 leading-relaxed">
                Work is approached in a structured and system-driven way,
                starting from understanding business requirements and system
                flow before moving into implementation.
              </p>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Enjoys collaborative team environments where technical
                discussions help shape better solutions. The mid-term goal is to
                grow into a Fullstack Developer capable of handling complex
                features and understanding application architecture end-to-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { CardExp } from "./card-experience";
import { EXPERIENCE_LIST } from "./list-experience";

export const Experience = () => {
  return (
    <div className="bg-fourth-500 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development, building scalable
            solutions and leading innovative projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Garis tengah */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#FFB22C] md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE_LIST.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row gap-8"
                >
                  {/* Kiri */}
                  <div className="md:w-1/2 flex justify-end">
                    {isLeft && (
                      <div className="w-full md:pr-12">
                        <CardExp data={exp} />
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                    <div className="w-16 h-16 bg-[#FFB22C] rounded-full flex items-center justify-center shadow-lg border-4 border-[#F7F7F7]">
                      <i className="ri-briefcase-line text-2xl text-black"></i>
                    </div>
                  </div>

                  {/* Kanan */}
                  <div className="md:w-1/2 flex justify-start">
                    {!isLeft && (
                      <div className="w-full md:pl-12">
                        <CardExp data={exp} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

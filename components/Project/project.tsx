import { CardLanding } from "./card-landing";
import { projectList } from "./list-project";

export const Project = () => {
  const projects = projectList;
  return (
    <section id="project">
      <div className="bg-white bg-fourth text-primary py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A collection of confidential projects showcasing technical
                expertise, measurable impact, and scalable solutions across
                various industries
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <CardLanding key={index} {...project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              * Some project details are confidential and have been generalized
              to protect client privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

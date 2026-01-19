import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { ProjectCardDto } from "./list-project";

export const CardLanding = ({
  title,
  description,
  keyContributions,
  techStack,
  isHaveImg,
  srcImg,
}: ProjectCardDto) => {
  return (
    <Card shadow="sm" className="bg-white ">
      <CardBody className="overflow-visible p-0">
        {isHaveImg ? (
          <div className="h-32 w-full rounded-t-xl overflow-hidden ">
            <Image
              isZoomed
              alt="HeroUI Fruit Image with Zoom"
              src={srcImg}
              className=" z-0 w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="h-32 w-full rounded-t-xl flex items-center justify-center bg-gradient-to-tl from-[#ffb22c] to-[#854836]">
            <div className="absolute top-4 left-4 px-1 py-1  backdrop-blur-sm rounded-full">
              <Chip
                className="text-white text-xs font-medium bg-black/20"
                variant="light"
              >
                Confidential
              </Chip>
            </div>
            <div className="text-white text-6xl">
              <i className={srcImg}></i>
            </div>
          </div>
        )}

        <div className="text-primary p-6">
          {/* Title */}
          <h2 className="font-bold text-xl mb-2">{title}</h2>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 text-justify">
            {description}
          </p>

          {/* Key Contributions */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <i className="ri-trophy-line text-[#FFB22C]"></i>
              <span className="text-xs font-semibold text-[#854836]">
                Key Contributions
              </span>
            </div>

            <ul className="space-y-1">
              {keyContributions.map((item, idx) => (
                <li
                  key={idx}
                  className="text-xs text-gray-600 flex items-start gap-2"
                >
                  <i className="ri-check-line text-[#854836] mt-0.5"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <span className="text-xs font-semibold text-gray-500 mb-2 block">
              Tech Stack :
            </span>

            <div className="text-small flex flex-wrap gap-2">
              {techStack.map((stack: string, idx: number) => (
                <Chip
                  key={idx}
                  size="sm"
                  variant="flat"
                  className="bg-fourth text-secondary"
                >
                  {stack}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { ExperienceDto } from "./list-experience";

type CardExpProps = {
  data: ExperienceDto;
};

export const CardExp = ({ data }: CardExpProps) => {
  return (
    <Card
      isPressable
      className="bg-white max-w-xl overflow-hidden rounded-xl"
      shadow="sm"
    >
      <CardBody className="p-0">
        <div className="flex items-stretch">
          {/* Gambar */}
          <div className="w-32 flex-shrink-0 flex">
            <Image
              src={data.imageSrc}
              alt={data.company}
              radius="none"
              classNames={{
                wrapper: "h-full w-full",
                img: "h-full w-full object-cover rounded-l-xl",
              }}
            />
          </div>

          {/* Body */}
          <div className="flex-1 p-8">
            <h2 className="text-2xl font-bold text-black mb-1">{data.title}</h2>
            <p className="text-lg font-semibold text-secondary mb-2">
              {data.company}
            </p>
            <p className="text-sm text-gray-500 flex items-center">
              <i className="ri-calendar-line mr-2"></i>
              {data.yearRange}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

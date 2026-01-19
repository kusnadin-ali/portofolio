export interface ExperienceDto {
  imageSrc: string;
  title: string;
  company: string;
  yearRange: string;
}

export const EXPERIENCE_LIST: ExperienceDto[] = [
  {
    imageSrc: "img/company/smbc.png",
    title: "Full-Stack Developer",
    company: "SMBCI",
    yearRange: "2025 - Present",
  },
  {
    imageSrc: "img/company/victoria.png",
    title: "Full-Stack Developer",
    company: "Victoria Life Insurance",
    yearRange: "2024 - 2025",
  },
  {
    imageSrc: "img/company/ist.png",
    title: "Back-End Developer",
    company: "PT. Infosys Solusi Terpadu",
    yearRange: "2023 - 2024",
  },
  {
    imageSrc: "img/company/padepokan79.png",
    title: "Full-Stack Developer",
    company: "PT. Padepokan Tujuh Sembilan",
    yearRange: "2023 - Present",
  },
];

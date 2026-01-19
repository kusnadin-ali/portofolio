import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Landing } from "@/components/landing";
import { Project } from "@/components/Project/project";
import "remixicon/fonts/remixicon.css";
import { Experience } from "@/components/Experience/experience";
import { About } from "@/components/About/about";
import { Contact } from "@/components/Contact/contact";

export default function Home() {
  return (
    <section className="">
      <Landing />
      <Project />
      <Experience />
      <About />
      <Contact />
    </section>
  );
}

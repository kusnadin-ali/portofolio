"use client";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1); // buang #
      setActiveMenu(hash || ""); // fallback kalau kosong
    };

    syncHash(); // jalan saat pertama kali render
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isBlurred={false}
      className="bg-white shadow-xl text-primary"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 text-primary"
            href="#home"
            onClick={() => setActiveMenu("")}
          >
            <Logo />
            <p className="font-bold text-inherit">Ali Kusnadin</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ul className="lg:flex gap-4 justify-end ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="text-2xl text-primary font-medium"
            >
              <NextLink
                data-active={activeMenu === item.href.replace("#", "")}
                className={clsx(
                  linkStyles({ color: "warning" }),
                  "data-[active=true]:text-[#ffb22c] data-[active=true]:font-bold",
                  "relative text-primary",
                  "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:rounded-[2px]",
                  "data-[active=true]:after:bg-[#ffb22c]",
                )}
                color="foreground"
                href={item.href}
                onClick={() => setActiveMenu(item.href.replace("#", ""))}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
    </HeroUINavbar>
  );
};

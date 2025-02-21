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
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Link as ScrollLink } from "react-scroll";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar shouldHideOnScroll maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full mt-8">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="">
            <p className="font-bold text-inherit pacifico-regular text-3xl">
              Dipali.
            </p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-center ml-2 w-full">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <ScrollLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "cursor-pointer data-[active=true]:text-primary data-[active=true]:font-medium jetbrains-mono text-xl",
                )}
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                to={item.href}
              >
                {item.label}
              </ScrollLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarContent
          className="hidden lg:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden lg:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button className="text-sm font-normal text-white bg-pink-600">
              <Link
                href={siteConfig.links.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                Hire me
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarItem>
          <Button className="text-sm font-normal text-white bg-pink-600">
            <Link
              href={siteConfig.links.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              Hire me
            </Link>
          </Button>
        </NavbarItem>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2 justify-center items-center">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <ScrollLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "cursor-pointer data-[active=true]:text-primary data-[active=true]:font-medium jetbrains-mono text-xl",
                )}
                duration={500}
                offset={-70}
                smooth={true}
                spy={true}
                to={item.href}
              >
                {item.label}
              </ScrollLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

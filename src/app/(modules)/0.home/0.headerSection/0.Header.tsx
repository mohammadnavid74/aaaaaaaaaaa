"use client";

import { Navbar, NavbarBrand, NavbarMenuToggle } from "@heroui/navbar";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { MenuSimpleSiteSectionDto } from "@/types/dtos/home/MenuSimpleSiteSectionDto";
import { useDisclosure } from "@heroui/react";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Login from "@/components/loginPage/Login";

export default function HeaderComponent({
  menus,
}: {
  menus: MenuSimpleSiteSectionDto[];
}) {
  const { isOpen, 
    // onOpen, 
    onOpenChange } = useDisclosure();

  return (
    <Navbar height="70px" className="sticky top-0 border-default-100">
      <Button
        // onPress={onOpen}
        color="danger"
        variant="bordered"
        className="hidden lg:flex"
        endContent={<Icon icon="material-symbols:login-rounded" />}
      >
        <a
          href="https://auth.mayan-group.com"
          target="_blank"
          className="text-sm"
        >
          ورود
        </a>
      </Button>
      <DesktopMenu menus={menus} />
      <NavbarMenuToggle className="lg:hidden" />
      <MobileMenu menus={menus} />
      <ThemeSwitcher />
      <NavbarBrand className="justify-end">
        <Image src="/logo.webp" alt="logo" width={137} height={50} priority />
      </NavbarBrand>
      <Login isOpen={isOpen} onOpenChange={onOpenChange} />
    </Navbar>
  );
}

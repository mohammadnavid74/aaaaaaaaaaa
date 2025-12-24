"use client";

import { NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Dropdown, DropdownTrigger } from "@heroui/react";
import { Icon } from "@iconify/react";
import MenuTreeRenderer from "./MenuTreeRenderer";
import { MenuSimpleSiteSectionDto } from "@/types/dtos/home/MenuSimpleSiteSectionDto";

export default function DesktopMenu({ menus }: { menus: MenuSimpleSiteSectionDto[] }) {
  return (
    <NavbarContent justify="center" className="hidden lg:flex flex-row-reverse">
      {menus.map((item) =>
        item.children.length === 0 ? (
          <NavbarItem key={item.id}>
            <Button variant="light" size="md" className="px-2">
              <a href={item.link ?? "#"} target="_blank" className="text-sm">
                {item.title}
              </a>
            </Button>
          </NavbarItem>
        ) : (
            <Dropdown key={item.id} shouldCloseOnScroll>
                <NavbarItem> 
              <DropdownTrigger>
                <Button
                  variant="light"
                  size="md"
                  endContent={<Icon icon="solar:alt-arrow-down-outline" />}
                  className="px-2"
                >
                  {item.title}
                </Button>
              </DropdownTrigger>
              </NavbarItem>
              <MenuTreeRenderer  menu={item} />
            </Dropdown>
          
        )
      )}
    </NavbarContent>
  );
}

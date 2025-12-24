"use client";

import { NavbarMenu } from "@heroui/navbar";
import { Accordion, AccordionItem } from "@heroui/react";
import { MenuSimpleSiteSectionDto } from "@/types/dtos/home/MenuSimpleSiteSectionDto";

function renderAccordion(menu: MenuSimpleSiteSectionDto) {
  if (!menu.children.length) {
    return (
      <AccordionItem
        key={menu.id}
        title={menu.title}
        hideIndicator
        onPress={() => window.open(menu.link ?? "#", "_blank")}
      />
    );
  }

  return (
    <AccordionItem key={menu.id} title={menu.title}>
      <Accordion>
        {menu.children.map((child) => renderAccordion(child))}
      </Accordion>
    </AccordionItem>
  );
}

export default function MobileMenu({ menus }: { menus: MenuSimpleSiteSectionDto[] }) {
  return (
    <NavbarMenu>
      <Accordion dir="rtl">
        {menus.map((menu) => renderAccordion(menu))}
      </Accordion>
    </NavbarMenu>
  );
}

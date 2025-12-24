"use client";

import {
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { MenuSimpleSiteSectionDto } from "@/types/dtos/home/MenuSimpleSiteSectionDto";

export default function MenuTreeRenderer({
  menu,
}: {
  menu: MenuSimpleSiteSectionDto;
}) {
  if (!menu.children || menu.children.length === 0) {
    return(<DropdownMenu key={menu.id}  dir="rtl">
        {menu.children?.map((child) => (
          <DropdownItem
            key={child.id}
            onPress={() => window.open(child.link ?? "#", "_blank")}
            textValue={child.title}
          >
            {child.title}
          </DropdownItem>
        ))}
      </DropdownMenu>);
  } else {
    {
    //   menu.children?.map((child) => <MenuTreeRenderer menu={child} />);
    return (
        <DropdownMenu key={menu.id} dir="rtl">
          {menu.children?.map((child) => (
            <DropdownItem
              key={child.id}
              onPress={() => window.open(child.link ?? "#", "_blank")}
              textValue={child.title}
            >
              {child.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      );
    }
  }
 
}

import { LayoutDashboard } from "lucide-react";

export interface MenuItemProps {
  title?: string;
  icon?: React.ElementType;
  href?: string;
  child?: MenuItemProps[]; // Updated type for child menu items
  megaMenu?: MenuItemProps[];
  multi_menu?: MenuItemProps[];
  nested?: MenuItemProps[];
  onClick?: () => void;
  isHeader?: boolean;
}

export const menus: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Menu",
    href: "/menu",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Shops",
    href: "/products",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];
export const adminConfig: MenuItemProps[] = [
  // dashboard
  {
    isHeader: true,
    title: "Admin Dashboard",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
  },
  {
    title: "Users",
    icon: LayoutDashboard,
    href: "user",
  },
];
export type Menu = (typeof menus)[number];

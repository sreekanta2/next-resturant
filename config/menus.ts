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
    title: "Services",
    href: "/services",
  },
  {
    title: "Classes",
    href: "/classes",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Events",
    href: "/events",
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
    title: "About me",
    href: "/about",
    child: [
      {
        title: "Company",
        href: "/about/company",
      },
    ],
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

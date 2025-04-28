import { menus } from "@/config/menus";
import { cn } from "@/lib/utils";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, LogInIcon } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";
import ThemeButton from "../../theme-button";
import { Button } from "../../ui/button";

export default function NavMenu() {
  const pathname = usePathname();
  const [offset, setOffset] = React.useState<number | null>(null);
  const [list, setList] = React.useState<HTMLUListElement | null | undefined>();
  const [value, setValue] = React.useState<string | null>();

  // Check if a menu item is active
  const isActive = (href: string) => {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  };

  const onNodeUpdate = (trigger: any, itemValue: any) => {
    if (trigger && list && value === itemValue) {
      const triggerOffsetLeft = trigger.offsetLeft + trigger.offsetWidth / 6;
      setOffset(Math.round(triggerOffsetLeft));
    } else if (value === "") {
      setOffset(null);
    }
    return trigger;
  };

  return (
    <div>
      <NavigationMenu.Root
        onValueChange={setValue}
        className="relative justify-start group z-[9999]"
      >
        <NavigationMenu.List
          ref={(node) => {
            if (node instanceof HTMLUListElement) {
              setList(node);
            } else {
              setList(null);
            }
          }}
          className="group flex list-none gap-3"
        >
          {menus?.map((item: any, index: number) =>
            item.child ? (
              <NavigationMenu.Item key={`item-${index}`} value={item}>
                <NavigationMenu.Trigger
                  ref={(node) => onNodeUpdate(node, item)}
                  asChild
                  className="flex items-center"
                >
                  <div
                    className={cn(
                      "flex items-center py-4 cursor-pointer group data-[state=open]:text-primary",
                      {
                        "text-primary": item.child.some((child: any) =>
                          isActive(child.href)
                        ),
                      }
                    )}
                  >
                    <span className="text-base font-medium">{item.title}</span>
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </div>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content
                  className={cn(
                    "w-full rounded-md border bg-popover text-popover-foreground shadow-lg"
                  )}
                >
                  {item.child && (
                    <div className="min-w-[200px] p-4" key={`item-${index}`}>
                      {item.child?.map((childItem: any, index: number) => (
                        <ListItem
                          className={cn("text-base font-medium", {
                            "text-primary": isActive(childItem.href),
                          })}
                          key={`child-${index}`}
                          title={childItem.title}
                          href={childItem.href}
                          childItem={childItem}
                          target="_blank"
                        />
                      ))}
                    </div>
                  )}
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item key={`item-${index}`}>
                <Link href={item.href} passHref legacyBehavior>
                  <NavigationMenu.Link asChild>
                    <div
                      className={cn(
                        "flex items-center px-2 py-4 cursor-pointer group data-[state=open]:text-primary",
                        {
                          "text-primary": isActive(item.href),
                        }
                      )}
                    >
                      <span className="text-base font-medium hover:text-primary">
                        {item.title}
                      </span>
                    </div>
                  </NavigationMenu.Link>
                </Link>
              </NavigationMenu.Item>
            )
          )}
          <div className="flex items-center gap-6">
            <ThemeButton />
            <Button asChild size="sm">
              <Link href="/auth/login" className="text-sm font-semibold">
                <LogInIcon className="w-4 h-4 me-1.5" />
                Login
              </Link>
            </Button>
          </div>
        </NavigationMenu.List>

        <div className="absolute top-full">
          <NavigationMenu.Viewport
            style={{
              display: !offset ? "none" : undefined,
              transform: `translateX(${offset}px)`,
              top: "100%",
              transition: "all 0.5s ease",
            }}
          />
        </div>
      </NavigationMenu.Root>
    </div>
  );
}

const ListItem = React.forwardRef<HTMLAnchorElement, any>(
  ({ className, children, title, childItem, href, ...props }, forwardedRef) => (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenu.Link asChild>
        <a
          className={cn(
            "select-none text-base font-medium text-default-600 rounded-md flex items-center gap-2 mb-4 last:mb-0 leading-none no-underline outline-none transition-colors hover:text-primary focus:text-primary",
            className
          )}
          ref={forwardedRef}
          {...props}
        >
          <div>{children}</div>
          <div className="capitalize">{title}</div>
        </a>
      </NavigationMenu.Link>
    </Link>
  )
);

ListItem.displayName = "ListItem";

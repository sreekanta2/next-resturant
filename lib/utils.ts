import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isLocationMatch = (
  targetLocation: any,
  locationName: any
): boolean => {
  return locationName.split("/").pop() === targetLocation;
};

export function getDynamicPath(pathname: any): any {
  const prefixes = ["en", "bn", "ar"];

  for (const prefix of prefixes) {
    if (pathname.startsWith(`/${prefix}/`)) {
      return `/${pathname.slice(prefix.length + 2)}`;
    }
  }

  return pathname;
}

export function matchPath(path: string, pattern: string) {
  const regex = new RegExp(
    "^" +
      pattern
        .replace(/\*/g, ".*") // Replace * with a regex wildcard
        .replace(/\//g, "\\/") + // Escape forward slashes
      "$"
  );
  return regex.test(path);
}
export const formatDate = (date: string | number | Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("en-US", options);
};

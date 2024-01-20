"use client";

// import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { BedDouble, CarFront, CarTaxiFront, FerrisWheel, Plane } from "lucide-react";

interface Example {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const examples: Example[] = [
  {
    name: "Stays",
    href: "/examples/mail",
    icon: <BedDouble size={18} className="mr-2" />,
  },
  {
    name: "Flights",
    href: "/examples/dashboard",
    icon: <Plane size={18} className="mr-2" />,
  },
  {
    name: "Cards",
    href: "/examples/cards",
    icon: <CarFront size={18} className="mr-2" />,
  },
  {
    name: "Attractions",
    href: "/examples/cards",
    icon: <FerrisWheel size={18} className="mr-2" />,
  },
  {
    name: "airport taxi",
    href: "/examples/cards",
    icon: <CarTaxiFront size={18} className="mr-2" />,
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  //   const pathname = usePathname()
  const pathname = location.pathname;

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          {examples.map((example, index) => (
            <Link
              to={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.icon}
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) =>
    pathname?.startsWith(example.href)
  );

  if (!example?.href) {
    return null;
  }

  return (
    <Link
      to={example?.href}
      target="_blank"
      rel="nofollow"
      className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}

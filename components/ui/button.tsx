import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { APP } from "@/App";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[#d84315] text-[#fdf4f1] hover:bg-[#d84315]/90",
        outline:
          "border border-[#263238] bg-white shadow-xs hover:bg-[#263238]/10",
        secondary: "bg-[#263238] text-[#fdf4f1] hover:bg-[#263238]/80",

        link: "text-[#263238] underline-offset-4 underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  wtsBtn,
  callBtn,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    wtsBtn?: boolean;
    callBtn?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  if (wtsBtn) {
    return (
      <Link
        aria-label="Contact Us On WhatsApp"
        href={`https://wa.me/${APP.phone}?text=I%20Come%20From%20Your%20Website%20and%20I%20Need%20Moving%20Services`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </Link>
    );
  }
  if (callBtn) {
    return (
      <Link
        aria-label="Call To Us"
        href={`tel:${APP.phone}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      </Link>
    );
  }
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

import clsx from "clsx";
import { JSX } from "react";

type Props<E extends React.ElementType = "div"> = {
  children: React.ReactNode;
  as?: E | keyof JSX.IntrinsicElements;
  className?: string;
  size?: "xs" | "sm" | "lg";
};

type ElementTypeProps<E extends React.ElementType> = Props<E> &
  Omit<React.ComponentProps<E>, keyof Props<E>>;

export default function Container<E extends React.ElementType = "div">({
  children,
  as,
  className = "",
  size = "lg",
  ...props
}: ElementTypeProps<E>) {
  const Component = as || "div";

  return (
    <Component
      className={clsx(
        "mx-auto block w-full px-4 sm:px-6 lg:px-8",
        className,
        size === "sm"
          ? "max-w-[78rem] mx-4"
          : size === "xs"
          ? "max-w-[55rem]"
          : "max-w-[90rem]"
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

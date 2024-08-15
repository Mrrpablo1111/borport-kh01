import { HTMLAttributes, ReactNode, useRef, useState } from "react";

interface socialProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color?: string;
}

export default function social({
  children,
  text,
  color,
  ...props
}: socialProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex p-2 items-center rounded-xl text-white ${
        color || "bg-black"
      }`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
}

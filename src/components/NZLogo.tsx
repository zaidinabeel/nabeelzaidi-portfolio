import React from "react";
import Image from "next/image";

export function NZIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`relative shrink-0 ${className}`}>
      <Image
        src="/brand/icon-mark.svg"
        alt="Nabeel Zaidi Icon"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export function NZLogo({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "stacked" | "icon" | "dark";
  className?: string;
}) {
  if (variant === "icon") {
    return <NZIcon className={className || "w-9 h-9"} />;
  }

  const isDark = variant === "dark";

  return (
    <div className={`relative shrink-0 flex items-center ${className}`}>
      <Image
        src={isDark ? "/brand/logo-horizontal-dark-bg.svg" : "/brand/logo-horizontal.svg"}
        alt="Nabeel Zaidi - Web Development & UI"
        width={195}
        height={44}
        className="h-9 sm:h-10 w-auto object-contain"
        priority
      />
    </div>
  );
}

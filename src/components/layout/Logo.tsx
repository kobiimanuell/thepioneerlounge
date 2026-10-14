import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={clsx(
        "flex items-center gap-2.5 text-paper transition-opacity hover:opacity-80",
        className
      )}
    >
      <Image
        src="/brand/logo/icon-mark-orange.png"
        alt="The Pioneer Lounge"
        width={32}
        height={32}
        className="size-8"
        priority
      />
      <span className="font-sans text-[15px] font-semibold leading-tight tracking-tight">
        The Pioneer
        <br />
        Lounge
      </span>
    </Link>
  );
}

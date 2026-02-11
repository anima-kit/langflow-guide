import Link from "next/link";
import { SideNavButtonProps } from "@/types/buttons";

export default function SideNavButton({ link }: SideNavButtonProps) {
  return (
    <Link href={link.href} passHref>
      <button
        type="button"
        className="w-full text-left py-2 px-4 bg-(--color-blue) text-(--background) font-bold rounded hover:bg-(--color-pink) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-gren)"
        aria-label={link.label}
      >
        {link.label}
      </button>
    </Link>
  );
}

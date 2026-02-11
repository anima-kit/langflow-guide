import Link from "next/link";
import { MainNavButtonProps } from "@/types/buttons";

export default function MainNavButton({ title, url }: MainNavButtonProps) {
  return (
    <Link href={url} passHref>
      <button
        type="button"
        className="px-6 py-2 bg-(--color-blue) text-(--background) font-bold rounded hover:bg-(--color-pink) transition-colors focus:outline-none focus:ring-2 focus:ring-(--color-green)"
        aria-label={title}
      >
        {title}
      </button>
    </Link>
  );
}

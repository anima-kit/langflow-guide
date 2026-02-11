import { SideNavProps } from "@/types/nav";
import SideNavButton from "@/components/buttons/SideNavButton";

const DEFAULT_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/examples", label: "Examples" },
  { href: "/presentation", label: "Presentation" },
  { href: "http://localhost:7860", label: "Server" },
];

// Component for sidebar navigation
const SideNav: React.FC<SideNavProps> = ({
  links = DEFAULT_NAV_LINKS,
  className,
}) => (
  <div
    className="fixed inset-y-0 right-0 group"
    style={{ width: "2rem", zIndex: 999 }}
  >
    <nav
      className={`fixed right-0 top-0 h-screen w-64 bg-(--background) border-r translate-x-full transform transition-transform duration-300 ease-in-out group-hover:translate-x-0 ${className}`}
    >
      <div className="mt-4 flex flex-col space-y-4 p-6">
        {links.map((link) => (
          <SideNavButton key={link.label} link={link} />
        ))}
      </div>
    </nav>
  </div>
);

export default SideNav;

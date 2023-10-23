import { ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const linkItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Auth (Client)",
    path: "/auth-client",
  },
  {
    label: "Auth (Server)",
    path: "/auth-server",
  },
  {
    label: "Admin Only",
    path: "/admin-only",
  },
] as const;

type LinkType = (typeof linkItems)[number];

const NavBar = () => {
  return (
    <header>
      <nav className="container my-2 py-2 flex items-center justify-around border-b-[0.5px]  shadow-b--md shadow-green-100/20">
        <Button variant={"ghost"} size={"icon"}>
          <ShieldCheck color="green" className="w-24 h-24" />
        </Button>
        <div className="flex space-x-2">
          {linkItems.map(({ label, path }: LinkType) => (
            <Link
              className="bg-green-800/40  p-2 rounded-sm"
              key={label}
              href={path}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

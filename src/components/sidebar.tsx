import Image from "next/image";
import Link from "next/link";

import { Navigation } from "./navigation";
import { Separator } from "./ui/separator";
import { WorkspaceSwitcher } from "./workspace-switcher";
import { Projects } from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={246} height={72} />
      </Link>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigation />
      <Separator className="my-4" />
      <Projects />
    </aside>
  );
};

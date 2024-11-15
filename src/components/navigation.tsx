import { SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { GoCheckCircle, GoCheckCircleFill, GoHome, GoHomeFill } from "react-icons/go"

const routes = [
    {
        label: "Home",
        href: "",
        icon: GoHome,
        activeIcon: GoHomeFill,
    },
    {
        label: "My Tasls",
        href: "/tasks",
        icon: GoCheckCircle,
        activeIcon: GoCheckCircleFill,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon,
        activeIcon: SettingsIcon,
    },
    {
        label: "Members",
        href: "/members",
        icon: UsersIcon,
        activeIcon: UsersIcon,
    },
];

export const Navigation = () => {
    return(
      <ul className="flex flex-col">
        {routes.map((item) => {
          const isActive = false;
          const Icon = isActive ? item.activeIcon : item.icon;

          return (
            <Link key={item.href} href={item.href}>
              <div>
                <Icon />
                {item.label}
              </div>
            </Link>
          )
        })}
      </ul>
    )
}
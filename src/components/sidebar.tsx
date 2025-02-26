import {
  Users,
  LineChart,
  Users2,
  Download,
  GraduationCap,
  Calendar,
  DiscIcon as Discord,
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { useSidebar } from "@/contexts/sidebar-context";

const menuItems = [
  { icon: Users, label: "Espace Client", isActive: true },
  { icon: LineChart, label: "Espace Trader" },
  { icon: Users2, label: "Espace Partenaire" },
  { icon: Download, label: "Télécharger" },
  { icon: GraduationCap, label: "Certificat" },
  { icon: Calendar, label: "Calendrier Économique", route: "calendar" },
  { icon: Discord, label: "Discord" },
];

export function Sidebar() {
  const { isExpanded } = useSidebar();

  return (
    <div
      className={cn(
        "flex flex-col bg-background border-r transition-all duration-300 ease-in-out",
        isExpanded ? "w-64" : "w-20"
      )}
    >
      <div
        className={cn(
          "p-4 transition-all duration-300 ease-in-out",
          !isExpanded && "items-center"
        )}
      >
        <img
          src="https://live.raisemyfunds.co/static/media/fullLogo.437a9e7cdecbde043e85.png"
          alt="Raise My Funds Logo"
          className={cn(
            "mb-4 transition-all duration-300",
            isExpanded ? "w-[150px]" : "w-12"
          )}
        />
        {isExpanded ? (
          <Button
            className="w-full mb-6 bg-sky-500 text-white hover:bg-sky-600"
            variant="default"
          >
            NOUVEAU CHALLENGE
          </Button>
        ) : (
          <Button className="w-12 h-12 p-0 mb-6" variant="default">
            <span className="text-lg">+</span>
          </Button>
        )}
      </div>

      <div className="px-4">
        {isExpanded && (
          <h2 className="mb-2 text-lg font-semibold">Menu Principal</h2>
        )}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.route ? `/${item.route}` : "#"}
              className={cn(
                "flex items-center gap-3 p-2 rounded-md hover:bg-secondary",
                item.isActive ? "text-white" : "text-muted-foreground",
                !isExpanded && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {isExpanded && <span>{item.label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

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

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-background border-r">
      <div className="p-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dashboard.PNG-GShkoLYytrHKI2zVAkFZA059LSYTTq.png"
          alt="Raise My Funds Logo"
          className="mb-4 w-[150px]"
        />
        <Button className="w-full mb-6" variant="default">
          NOUVEAU CHALLENGE
        </Button>
      </div>

      <div className="px-4">
        <h2 className="mb-2 text-lg font-semibold">Menu Principal</h2>
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-white"
          >
            <Users className="h-5 w-5" />
            <span>Espace Client</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <LineChart className="h-5 w-5" />
            <span>Espace Trader</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <Users2 className="h-5 w-5" />
            <span>Espace Partenaire</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <Download className="h-5 w-5" />
            <span>Télécharger</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <GraduationCap className="h-5 w-5" />
            <span>Certificat</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <Calendar className="h-5 w-5" />
            <span>Calendrier Économique</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary text-muted-foreground"
          >
            <Discord className="h-5 w-5" />
            <span>Discord</span>
          </a>
        </nav>
      </div>
    </div>
  );
}

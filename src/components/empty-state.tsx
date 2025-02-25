import { Copy } from "lucide-react";
import { Button } from "./ui/button";

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="bg-primary/10 p-4 rounded-lg mb-6">
        <Copy className="h-12 w-12 text-primary" />
      </div>
      <h2 className="text-2xl font-semibold mb-2">
        Vous n'avez pas encore de compte
      </h2>
      <p className="text-muted-foreground mb-6">
        Commencez votre aventure dès aujourd'hui
      </p>
      <Button size="lg">Acheter un challenge</Button>
    </div>
  );
}

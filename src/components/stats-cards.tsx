import { Target, Building2, Wallet } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-secondary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <Target className="h-8 w-8 text-primary mb-2" />
          <h3 className="text-3xl font-bold">0</h3>
          <p className="text-muted-foreground">Challenges Actifs</p>
        </CardContent>
      </Card>

      <Card className="bg-secondary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <Building2 className="h-8 w-8 text-emerald-500 mb-2" />
          <h3 className="text-3xl font-bold">0</h3>
          <p className="text-muted-foreground">Comptes Financés</p>
        </CardContent>
      </Card>

      <Card className="bg-secondary">
        <CardContent className="flex flex-col items-center justify-center p-6">
          <Wallet className="h-8 w-8 text-yellow-500 mb-2" />
          <h3 className="text-3xl font-bold">0.00€</h3>
          <p className="text-muted-foreground">Portefeuille Actuel</p>
          <span className="text-sm text-muted-foreground">NA</span>
        </CardContent>
      </Card>
    </div>
  );
}

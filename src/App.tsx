import type React from "react";

import { Button } from "./components/ui/button";
import { UserCircle, PanelLeftClose, PanelLeft } from "lucide-react";
import { useSidebar } from "./contexts/sidebar-context";
import { Sidebar } from "./components/sidebar";
import { StatsCards } from "./components/stats-cards";
import { Analytics } from "./components/analytics";

export function Layout({ children }: { children: React.ReactNode }) {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div className="flex h-screen max-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="hover:bg-secondary"
          >
            {isExpanded ? (
              <PanelLeftClose className="h-5 w-5" />
            ) : (
              <PanelLeft className="h-5 w-5" />
            )}
            <span className="sr-only">
              {isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
            </span>
          </Button>

          <div className="flex items-center gap-4">
            <Button variant="outline">FREE TRIAL</Button>
            <Button variant="secondary">RETIRER</Button>
            <Button variant="ghost" size="icon">
              <UserCircle className="h-8 w-8" />
              <span className="sr-only">User menu</span>
            </Button>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <StatsCards />
      <Analytics />
    </>
  );
}

export default App;

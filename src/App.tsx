import { EmptyState } from "./components/empty-state";
import { Sidebar } from "./components/sidebar";
import { StatsCards } from "./components/stats-cards";
import { Button } from "./components/ui/button";
import { UserCircle } from "lucide-react";

function App() {
  return (
    <div className="flex h-screen dark">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 border-b">
          <Button variant="ghost" size="icon">
            <span className="sr-only">Back</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
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
          <StatsCards />
          <EmptyState />
        </main>
      </div>
    </div>
  );
}

export default App;

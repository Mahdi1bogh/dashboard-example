import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App, { Layout } from "./App.tsx";
import "@/styles/globals.css";
import Calendar from "./pages/calendar.tsx";
import { SidebarProvider } from "./contexts/sidebar-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Layout>
                <App />
              </Layout>
            }
          />
          <Route
            path="/calendar"
            element={
              <Layout>
                <Calendar />
              </Layout>
            }
          />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  </StrictMode>
);

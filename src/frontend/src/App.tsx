import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

function getRoute() {
  const hash = window.location.hash;
  if (hash.startsWith("#/about")) return "about";
  if (hash.startsWith("#/services")) return "services";
  if (hash.startsWith("#/listings")) return "listings";
  if (hash.startsWith("#/contact")) return "contact";
  return "home";
}

function AppContent() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentRoute={route} />
      <main className="flex-1">
        {route === "home" && <HomePage />}
        {route === "about" && <AboutPage />}
        {route === "services" && <ServicesPage />}
        {route === "listings" && <ListingsPage />}
        {route === "contact" && <ContactPage />}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProgramsPage from "./pages/ProgramsPage";
import AboutPage from "./pages/AboutPage";
import InnovationsPage from "./pages/InnovationsPage";
import NeuralSystemPage from "./pages/NeuralSystemPage";
import HotmartNeuralSystem from "./pages/HotmartNeuralSystem";
import HotmartNeurogastronomyAI from "./pages/HotmartNeurogastronomyAI";
import PartnersPage from "./pages/PartnersPage";
import SocietyPage from "./pages/SocietyPage";
import EventsPage from "./pages/EventsPage";
import NotFound from "./pages/NotFound";
import CarlaCard from "./pages/CarlaCard";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import WelcomePage from "./pages/WelcomePage";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index lang="en" />} />
          <Route path="/es" element={<Index lang="es" />} />
          <Route path="/pt" element={<Index lang="pt" />} />
          <Route path="/programs" element={<ProgramsPage lang="en" />} />
          <Route path="/es/programas" element={<ProgramsPage lang="es" />} />
          <Route path="/pt/programas" element={<ProgramsPage lang="pt" />} />
          <Route path="/about" element={<AboutPage lang="en" />} />
          <Route path="/pt/sobre" element={<AboutPage lang="pt" />} />
          <Route path="/es/nosotros" element={<AboutPage lang="es" />} />
          <Route path="/innovations" element={<InnovationsPage lang="en" />} />
          <Route path="/pt/inovacoes" element={<InnovationsPage lang="pt" />} />
          <Route path="/es/innovaciones" element={<InnovationsPage lang="es" />} />
          <Route path="/neural-system" element={<NeuralSystemPage lang="en" />} />
          <Route path="/pt/sistema-neural" element={<NeuralSystemPage lang="pt" />} />
          <Route path="/es/sistema-neural" element={<NeuralSystemPage lang="es" />} />
          <Route path="/partners" element={<PartnersPage lang="en" />} />
          <Route path="/pt/parceiros" element={<PartnersPage lang="pt" />} />
          <Route path="/es/socios" element={<PartnersPage lang="es" />} />
          <Route path="/society" element={<SocietyPage lang="en" />} />
          <Route path="/pt/sociedade" element={<SocietyPage lang="pt" />} />
          <Route path="/es/sociedad" element={<SocietyPage lang="es" />} />
          <Route path="/events" element={<EventsPage lang="en" />} />
          <Route path="/pt/eventos" element={<EventsPage lang="pt" />} />
          <Route path="/es/eventos" element={<EventsPage lang="es" />} />
          <Route path="/hotmart/neural-system" element={<HotmartNeuralSystem />} />
          <Route path="/hotmart/neurogastronomy-ai" element={<HotmartNeurogastronomyAI />} />
          <Route path="/carla" element={<CarlaCard />} />
          <Route path="/terms" element={<TermsPage lang="en" />} />
          <Route path="/pt/termos" element={<TermsPage lang="pt" />} />
          <Route path="/es/terminos" element={<TermsPage lang="es" />} />
          <Route path="/privacy" element={<PrivacyPage lang="en" />} />
          <Route path="/pt/privacidade" element={<PrivacyPage lang="pt" />} />
          <Route path="/es/privacidad" element={<PrivacyPage lang="es" />} />
          <Route path="/bem_vindo" element={<WelcomePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

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
import NotFound from "./pages/NotFound";

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
          <Route path="/hotmart/neural-system" element={<HotmartNeuralSystem />} />
          <Route path="/hotmart/neurogastronomy-ai" element={<HotmartNeurogastronomyAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

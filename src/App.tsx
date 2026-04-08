import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ProgramsPage from "./pages/ProgramsPage";
import AboutPage from "./pages/AboutPage";
import HotmartNeuralSystem from "./pages/HotmartNeuralSystem";
import HotmartNeurogastronomyAI from "./pages/HotmartNeurogastronomyAI";
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

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Neurogastronomy from "./pages/Neurogastronomy";
import NeuralSystem from "./pages/NeuralSystem";
import HotmartNeuralSystem from "./pages/HotmartNeuralSystem";
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
          <Route path="/neurogastronomy" element={<Neurogastronomy lang="en" />} />
          <Route path="/es/neurogastronomia" element={<Neurogastronomy lang="es" />} />
          <Route path="/pt/neurogastronomia" element={<Neurogastronomy lang="pt" />} />
          <Route path="/neural-system" element={<NeuralSystem lang="en" />} />
          <Route path="/es/sistema-neural" element={<NeuralSystem lang="es" />} />
          <Route path="/pt/sistema-neural" element={<NeuralSystem lang="pt" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

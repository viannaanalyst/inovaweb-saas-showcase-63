import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import About from "./pages/About";
import Sobre from "./pages/Sobre";
import Tecnologias from "./pages/Tecnologias";
import Contato from "./pages/Contato";
import WhatsAppRedirect from "./pages/WhatsAppRedirect";
import Qualificacao from "./pages/Qualificacao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/tecnologias" element={<Tecnologias />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/whats" element={<WhatsAppRedirect />} />
            <Route path="/qualificacao" element={<Qualificacao />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

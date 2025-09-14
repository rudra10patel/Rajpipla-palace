import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import VirtualTour from "./pages/VirtualTour";
import DigitalArchive from "./pages/DigitalArchive";
import AudioTour from "./pages/AudioTour";
import Visit from "./pages/Visit";
import AIGuide from "./pages/AIGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/archive" element={<DigitalArchive />} />
          <Route path="/audio-tour" element={<AudioTour />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/ai-guide" element={<AIGuide />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import Science from "@/pages/science";
import Teachers from "@/pages/Teachers";
import HotelManagement from "@/pages/HotelManagement";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
        <Route path="/science" component={Science} /> 
        <Route path="/teachers" component={Teachers} />
      <Route path="/hotelmanagement" component={HotelManagement} />
      <Route component={NotFound} />
      

    </Switch>
  );
  
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

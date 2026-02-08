import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Price from "./pages/Price";
import Footer from "./components/Footer";
import Map from "./pages/Map";

const queryClient = new QueryClient();

const App = () => (

    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/price" element={<Price />} />
                <Route path="/map" element={<Map />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
    </QueryClientProvider>

);

export default App;

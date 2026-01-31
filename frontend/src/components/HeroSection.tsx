import { Search, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-[0.03]" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              Smart Parking Solution
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Find & Book
              <span className="text-gradient block">Parking Spots</span>
              In Seconds
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Reserve your parking space in advance. No more circling around looking for parking. Save time and park with confidence.
            </p>

            {/* Search Box */}
            <div className="bg-card rounded-2xl shadow-card p-4 md:p-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Date & Time"
                    className="bg-transparent w-full outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button size="lg" className="w-full gap-2">
                  <Search className="w-4 h-4" />
                  Find Parking
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "500+", label: "Parking Locations" },
                { value: "50K+", label: "Happy Customers" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Map preview */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card bg-secondary aspect-square lg:aspect-[4/3]">
              {/* Simulated map */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                
                {/* Map markers */}
                <div className="absolute inset-0 p-8">
                  {[
                    { top: "20%", left: "30%", active: true },
                    { top: "40%", left: "60%", active: false },
                    { top: "60%", left: "25%", active: false },
                    { top: "35%", left: "75%", active: true },
                    { top: "70%", left: "55%", active: true },
                  ].map((marker, i) => (
                    <div
                      key={i}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${marker.active ? "animate-float" : ""}`}
                      style={{ top: marker.top, left: marker.left, animationDelay: `${i * 0.2}s` }}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${marker.active ? "gradient-hero shadow-hover" : "bg-muted"}`}>
                        <MapPin className={`w-5 h-5 ${marker.active ? "text-primary-foreground" : "text-muted-foreground"}`} />
                      </div>
                      {marker.active && (
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/30 animate-pulse-soft" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card rounded-xl p-4 shadow-card backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">City Center Parking</p>
                    <p className="text-sm text-muted-foreground">2 spots available</p>
                  </div>
                  <Button size="sm">Book</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

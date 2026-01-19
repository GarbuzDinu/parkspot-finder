import { Search, Calendar, Car, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Location",
    description: "Enter your destination and find available parking spots near you.",
    color: "bg-primary",
  },
  {
    icon: Calendar,
    title: "Choose Time",
    description: "Select your preferred date, arrival time, and duration of parking.",
    color: "bg-accent",
  },
  {
    icon: Car,
    title: "Book & Pay",
    description: "Secure your spot with instant confirmation and easy payment.",
    color: "bg-primary",
  },
  {
    icon: CheckCircle,
    title: "Park & Go",
    description: "Show your booking confirmation and park hassle-free.",
    color: "bg-accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Booking a parking spot has never been easier. Follow these simple steps and park stress-free.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold text-sm flex items-center justify-center shadow-soft z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-2xl ${step.color} flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-300 group-hover:scale-105`}>
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl text-foreground mt-6 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

import { Shield, Clock, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "All our parking locations feature 24/7 surveillance, well-lit areas, and regular security patrols.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "No more driving in circles. Book ahead and head straight to your reserved spot.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We support EV charging stations and contribute to reducing urban congestion and emissions.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "We partner with local businesses and municipalities to create better parking solutions.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">ParkEasy</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We're on a mission to transform the way you park. Founded in 2020, ParkEasy has grown to become the leading smart parking solution in the country, serving over 50,000 happy customers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our platform connects drivers with available parking spaces in real-time, making urban mobility smoother and more sustainable. We believe finding parking should be the easiest part of your journey.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "500+", label: "Parking Partners" },
                { value: "50K+", label: "Monthly Bookings" },
                { value: "4.8★", label: "User Rating" },
                { value: "15+", label: "Cities Covered" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-secondary">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

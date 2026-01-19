import { Check, Zap, Crown, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Pay As You Go",
    icon: Zap,
    description: "Perfect for occasional parkers",
    price: null,
    priceLabel: "From $2/hr",
    features: [
      "No subscription required",
      "Pay only when you park",
      "Access to all locations",
      "Mobile app access",
      "Email support",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Monthly Pass",
    icon: Crown,
    description: "Best for daily commuters",
    price: 89,
    priceLabel: "/month",
    features: [
      "Unlimited parking hours",
      "Reserved spot guarantee",
      "Priority locations",
      "EV charging included",
      "24/7 priority support",
      "Cancel anytime",
    ],
    popular: true,
    buttonVariant: "default" as const,
  },
  {
    name: "Business",
    icon: Building2,
    description: "For teams and companies",
    price: 199,
    priceLabel: "/month",
    features: [
      "Up to 10 team members",
      "Centralized billing",
      "Usage analytics",
      "Dedicated account manager",
      "Custom locations",
      "API access",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 animate-fade-in ${
                plan.popular
                  ? "bg-card shadow-card ring-2 ring-primary scale-105 z-10"
                  : "bg-card shadow-soft hover:shadow-card"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-hero text-primary-foreground text-sm font-semibold rounded-full shadow-button">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${plan.popular ? "gradient-hero" : "bg-primary/10"}`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                {plan.price ? (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.priceLabel}</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-primary">{plan.priceLabel}</div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-primary" : "bg-primary/10"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.buttonVariant} className="w-full" size="lg">
                {plan.price ? "Get Started" : "Start Parking"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

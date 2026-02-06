import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* CTA Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Ready to Park Smarter?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of drivers who save time and money with ParkEasy. Start booking your parking spots today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroOutline" size="xl">
              Download App
            </Button>
            <Button className="bg-background text-primary hover:bg-background/90" size="xl">
              Book Now
            </Button>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <a href="#home" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Car className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">
                  Park<span className="text-primary">Easy</span>
                </span>
              </a>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Making parking easy, one spot at a time. Your trusted partner for smart parking solutions.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Find Parking", "Pricing", "How It Works", "For Business", "Partner With Us"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-6">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "FAQs", "Terms of Service", "Privacy Policy", "Cancellation Policy"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/70 text-sm">
                    123 Parking Street, City Center, 12345
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:hello@parkeasy.com" className="text-primary-foreground/70 hover:text-primary transition-colors text-sm">
                    hello@parkeasy.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 ParkEasy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

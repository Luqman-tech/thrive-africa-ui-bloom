
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-earth-brown max-w-2xl mx-auto">
            Ready to make a positive impact? Let's discuss how we can work together 
            to create sustainable solutions for your community or organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-playfair font-semibold text-forest-green mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-earth-green rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Address</h4>
                  <p className="text-earth-brown">
                    Nairobi, Kenya<br />
                    East Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-earth-green rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Email</h4>
                  <p className="text-earth-brown">
                    info@ecothriveafrica.com<br />
                    partnerships@ecothriveafrica.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-earth-green rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green mb-1">Phone</h4>
                  <p className="text-earth-brown">
                    +254 (0) 700 000 000<br />
                    Monday - Friday, 9AM - 5PM EAT
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-earth-green/10 to-forest-green/10 rounded-xl">
              <h4 className="font-playfair font-semibold text-lg text-forest-green mb-3">
                Why Choose EcoThrive Africa?
              </h4>
              <ul className="space-y-2 text-earth-brown">
                <li>• Local expertise with global standards</li>
                <li>• Community-centered approach</li>
                <li>• Proven track record across East Africa</li>
                <li>• Sustainable and measurable results</li>
              </ul>
            </div>
          </div>

          <div className="animate-scale-in">
            <form className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-playfair font-semibold text-forest-green mb-6">
                Send us a Message
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-earth-brown mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your first name"
                    className="border-gray-300 focus:border-earth-green focus:ring-earth-green"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-earth-brown mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your last name"
                    className="border-gray-300 focus:border-earth-green focus:ring-earth-green"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="border-gray-300 focus:border-earth-green focus:ring-earth-green"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Organization (Optional)
                </label>
                <Input 
                  type="text" 
                  placeholder="Your organization name"
                  className="border-gray-300 focus:border-earth-green focus:ring-earth-green"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-earth-brown mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your project or how we can help..."
                  rows={4}
                  className="border-gray-300 focus:border-earth-green focus:ring-earth-green"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-earth-green hover:bg-forest-green text-white py-3 text-lg group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

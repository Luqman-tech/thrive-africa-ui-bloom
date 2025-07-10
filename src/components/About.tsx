
import { Button } from '@/components/ui/button';
import { Award, Heart, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-sky-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
              About EcoThrive Africa
            </h2>
            
            <p className="text-lg text-earth-brown mb-6 leading-relaxed">
              Founded in Kenya with a vision to transform how Africa approaches sustainability, 
              EcoThrive Africa bridges the gap between environmental conservation and community development.
            </p>
            
            <p className="text-lg text-earth-brown mb-8 leading-relaxed">
              Our team of environmental scientists, community organizers, and sustainability experts 
              work hand-in-hand with local communities to create lasting positive change across the continent.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-earth-green mb-1">50+</div>
                <div className="text-sm text-earth-brown">Communities Served</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-earth-green mb-1">10K+</div>
                <div className="text-sm text-earth-brown">Trees Planted</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg">
                <div className="text-3xl font-bold text-earth-green mb-1">5</div>
                <div className="text-sm text-earth-brown">Years Experience</div>
              </div>
            </div>

            <Button className="bg-earth-green hover:bg-forest-green text-white px-8 py-3">
              Learn More About Us
            </Button>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="African wildlife and landscape"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-green/20 to-transparent rounded-xl"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <MapPin className="h-8 w-8 text-savanna-orange mb-2" />
                <span className="text-sm font-medium text-forest-green">Based in Kenya</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Award className="h-8 w-8 text-earth-green mb-2" />
                <span className="text-sm font-medium text-forest-green">Certified Experts</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="h-8 w-8 text-red-500 mb-2" />
                <span className="text-sm font-medium text-forest-green">Community First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

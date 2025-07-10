
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Globe, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-blue via-warm-white to-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-forest-green mb-6">
            Sustainable Solutions for
            <span className="text-earth-green block mt-2">African Ecosystems</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-earth-brown mb-8 max-w-2xl mx-auto leading-relaxed">
            Empowering communities through comprehensive sustainability strategies. 
            We're a Kenya-based enterprise dedicated to preserving and enhancing 
            Africa's natural heritage for future generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-earth-green hover:bg-forest-green text-white px-8 py-3 text-lg group transition-all duration-300"
            >
              Explore Our Impact
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-earth-green text-earth-green hover:bg-earth-green hover:text-white px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up">
            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Globe className="h-12 w-12 text-earth-green mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-forest-green mb-2">
                Ecosystem Conservation
              </h3>
              <p className="text-earth-brown text-center">
                Protecting Africa's diverse ecosystems through innovative strategies
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Users className="h-12 w-12 text-savanna-orange mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-forest-green mb-2">
                Community Empowerment
              </h3>
              <p className="text-earth-brown text-center">
                Building sustainable livelihoods for local communities
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/70 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Leaf className="h-12 w-12 text-earth-green mb-4" />
              <h3 className="font-playfair font-semibold text-lg text-forest-green mb-2">
                Sustainable Development
              </h3>
              <p className="text-earth-brown text-center">
                Implementing comprehensive sustainability frameworks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

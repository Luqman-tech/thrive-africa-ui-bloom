
import { Sprout, Recycle, TreePine, Users, Target, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TreePine,
      title: "Reforestation Programs",
      description: "Large-scale tree planting initiatives to restore degraded landscapes and combat climate change across Kenya and East Africa.",
    },
    {
      icon: Recycle,
      title: "Waste Management Solutions",
      description: "Innovative waste reduction and recycling programs designed for African communities and urban environments.",
    },
    {
      icon: Sprout,
      title: "Sustainable Agriculture",
      description: "Training farmers in climate-smart agriculture techniques that increase yields while protecting the environment.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building local capacity through education, training, and participatory conservation programs.",
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Comprehensive sustainability assessments and strategic planning for organizations and communities.",
    },
    {
      icon: BarChart3,
      title: "Impact Monitoring",
      description: "Data-driven monitoring and evaluation systems to track environmental and social impact metrics.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-warm-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-forest-green mb-6">
            Our Services
          </h2>
          <p className="text-lg text-earth-brown max-w-2xl mx-auto">
            Comprehensive sustainability solutions tailored for the African context, 
            combining traditional knowledge with innovative approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-earth-green to-forest-green rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-playfair font-semibold text-xl text-forest-green mb-4">
                  {service.title}
                </h3>
                
                <p className="text-earth-brown leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaIndustry, FaSnowflake, FaWind, FaTools, FaFire, FaWrench, FaChartLine } from 'react-icons/fa';

export default function MechanicalServices() {
  const mechanicalServices = [
    {
      title: "Piping Works",
      description: "All types of piping works including MS, GI, SS, HDPE, CPVC, PVC & Gas piping works.",
      icon: <FaTools />
    },
    {
      title: "Insulation Works",
      description: "Ducting insulation, under deck insulation & Acoustic insulation works.",
      icon: <FaIndustry />
    },
    {
      title: "Industrial Piping",
      description: "IBR & NON IBR piping works, Chiller plant works etc.",
      icon: <FaIndustry />
    },
    {
      title: "Fabrication Works",
      description: "Light and heavy fabrication works including Solar Structure with hot deep galvanizing.",
      icon: <FaWrench />
    },
    {
      title: "Ducting Works",
      description: "PPFRP & GI ducting works with professional installation.",
      icon: <FaWind />
    },
    {
      title: "Clean Room Services",
      description: "Clean room validation works with precision and expertise.",
      icon: <FaTools />
    },
    {
      title: "Equipment Installation",
      description: "AHU, Air washers & ventilation fan assembly & installation works.",
      icon: <FaWrench />
    },
    {
      title: "Safety Systems",
      description: "Comprehensive fire fighting & Plumbing works services.",
      icon: <FaFire />
    }
  ];

  const acServices = {
    title: "Air Conditioning Solutions",
    description: "We offer comprehensive Air Conditioning solutions from concept design to execution.",
    features: [
      "Complete design to execution solutions",
      "Installation and Commissioning services",
      "Central Air-Conditioning System expertise",
      "VRF/VRV systems",
      "Split A/C units",
      "Ductable systems",
      "Precision Air Conditioning (PAC)",
      "Chilled water cassette units"
    ]
  };

  const ventilationServices = {
    title: "Ventilation Systems",
    description: "Complete building ventilation solutions with technical expertise.",
    features: [
      "Basement ventilation systems",
      "Lift well & Staircase systems",
      "Fresh Air & Exhaust systems for comfort areas",
      "Technical solutions including designing",
      "Professional installation services",
      "CFD analysis for optimal performance"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mechanical Services</h1>
              <p className="text-xl opacity-90">Comprehensive MEP Solutions for Modern Infrastructure</p>
            </div>
          </div>
        </section>

        {/* Mechanical Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mechanical Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mechanicalServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-custom hover:shadow-lg transition-shadow">
                  <div className="text-primary text-2xl mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Air Conditioning Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <FaSnowflake className="text-4xl text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">{acServices.title}</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8">{acServices.description}</p>
              <div className="bg-white rounded-lg shadow-custom p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {acServices.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <FaChartLine className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ventilation Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-8">
                <FaWind className="text-4xl text-primary mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">{ventilationServices.title}</h2>
              </div>
              <p className="text-gray-600 text-lg mb-8">{ventilationServices.description}</p>
              <div className="bg-white rounded-lg shadow-custom p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {ventilationServices.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <FaChartLine className="text-primary mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Mechanical Services?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your mechanical, air conditioning, or ventilation requirements.
            </p>
            <a href="/contact" className="btn-primary inline-block">Get a Quote</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    title: "Mechanical",
    description: "Comprehensive HVAC solutions, industrial piping systems, and precision fabrication services.",
    href: "/services/mechanical",
    icon: "⚙️",
    features: [
      "HVAC Design & Installation",
      "Industrial Piping",
      "Ducting & Insulation",
      "Fabrication Services"
    ]
  },
  {
    title: "Electrical",
    description: "End-to-end electrical solutions from substations to energy-efficient lighting systems.",
    href: "/services/electrical",
    icon: "🔌",
    features: [
      "Substation Design",
      "Power Distribution",
      "Energy Solutions",
      "Maintenance Services"
    ]
  },
  {
    title: "Civil & Interior",
    description: "Complete interior design and construction services with modern aesthetics.",
    href: "/services/civil",
    icon: "🏗️",
    features: [
      "Interior Design",
      "Construction Management",
      "Renovation",
      "Turnkey Solutions"
    ]
  },
];

const projects = [
  {
    title: "Tech Park Development",
    location: "Bangalore",
    description: "Complete MEP solutions for 2 million sq ft IT park",
    scope: "HVAC, Electrical, Plumbing",
    duration: "18 months"
  },
  {
    title: "Manufacturing Facility",
    location: "Pune",
    description: "Industrial-grade electrical and mechanical systems",
    scope: "Power Distribution, Process Piping",
    duration: "12 months"
  },
  {
    title: "Hospital Complex",
    location: "Mumbai",
    description: "Critical care infrastructure with backup systems",
    scope: "Medical Gas, HVAC, Electrical",
    duration: "24 months"
  }
];

const testimonials = [
  {
    quote: "Shree Venkatesh Enterprises delivered our commercial complex project ahead of schedule while maintaining exceptional quality standards.",
    author: "Rajesh Kumar",
    position: "CEO, Urban Developers Ltd.",
    rating: 5
  },
  {
    quote: "Their technical expertise in HVAC design saved us 20% in energy costs compared to our previous facility.",
    author: "Priya Sharma",
    position: "Operations Head, Techno Industries",
    rating: 5
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Venkatesh Enterprises | MEP Solutions Provider</title>
        <meta name="description" content="Leading MEP contracting company specializing in mechanical, electrical, and plumbing solutions for commercial and industrial projects across India." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white section">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="container relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                  Engineering Excellence in MEP Solutions
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-gray-100 animate-slide-up">
                  Delivering turnkey mechanical, electrical, and plumbing solutions for India&apos;s infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 animate-scale">
                  <Link href="/contact" className="btn-secondary">
                    Request Consultation
                  </Link>
                  <Link href="/projects" className="btn-outline">
                    View Our Work
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section bg-gray-50">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="section-title">Our Core Services</h2>
                <p className="section-subtitle">
                  Comprehensive solutions tailored to your project requirements
                </p>
              </div>
              
              <div className="grid-cols-auto-fit">
                {services.map((service) => (
                  <ServiceCard 
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    href={service.href}
                    icon={service.icon}
                    features={service.features}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Projects Showcase */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our portfolio showcases our expertise across diverse sectors
                </p>
              </div>

              <div className="text-center mt-12">
                <Link 
                  href="/projects" 
                  className="inline-block bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  Explore Full Portfolio
                </Link>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="section bg-white">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="section-title">Why Partner With Us</h2>
                <p className="section-subtitle">
                  Experience excellence in every project with our expert team
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
                {[
                  {
                    icon: "🏆",
                    title: "Industry Leaders",
                    description: "15+ years of specialized MEP experience"
                  },
                  {
                    icon: "⚡",
                    title: "Technical Expertise",
                    description: "Certified engineers and latest technologies"
                  },
                  {
                    icon: "🔄",
                    title: "End-to-End Solutions",
                    description: "From design to maintenance"
                  },
                  {
                    icon: "💎",
                    title: "Quality Assurance",
                    description: "ISO-certified processes"
                  }
                ].map((item, index) => (
                  <div key={index} className="card card-hover">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="section bg-gray-50">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="section-title">Client Success Stories</h2>
                <p className="section-subtitle">
                  Hear what our clients have to say about their experience with us
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto stagger-animation">
                {[
                  {
                    quote: "Shree Venkatesh Enterprises delivered our commercial complex project ahead of schedule while maintaining exceptional quality standards.",
                    author: "Rajesh Kumar",
                    position: "CEO, Urban Developers Ltd."
                  },
                  {
                    quote: "Their technical expertise in HVAC design saved us 20% in energy costs compared to our previous facility.",
                    author: "Priya Sharma",
                    position: "Operations Head, Techno Industries"
                  }
                ].map((testimonial, index) => (
                  <div key={index} className="card">
                    <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section bg-gradient-to-r from-primary to-primary-dark">
            <div className="container text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Discuss Your Project?
              </h2>
              <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-100">
                Our team is ready to provide customized MEP solutions for your specific requirements
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
                <Link href="tel:+919822390550" className="btn-outline">
                  Call Now: +91 9822390550
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
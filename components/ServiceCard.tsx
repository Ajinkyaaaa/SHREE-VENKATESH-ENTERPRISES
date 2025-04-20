import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  features: string[];
}

export default function ServiceCard({ title, description, href, icon, features }: ServiceCardProps) {
  return (
    <div className="card card-hover">
      <div className="flex items-center justify-between mb-6">
        <div className="text-4xl bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-primary-dark/10 
                      group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="list-item">
            <svg className="list-item-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link 
        href={href}
        className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300"
      >
        Learn More
        <svg 
          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
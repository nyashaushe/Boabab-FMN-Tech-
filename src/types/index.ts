export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category: 'crm' | 'booking' | 'chatbot' | 'analytics';
  price: number;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}
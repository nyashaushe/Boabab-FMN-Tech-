import { 
  Sparkles, 
  Shield, 
  Globe, 
  Rocket, 
  Code,
  Bot,
  Workflow,
  Database,
  Package,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Users,
  BarChart,
  MessageSquare,
  Zap
} from 'lucide-react';

// Core feature icons used in Hero section
export const coreFeatures = [
  { 
    icon: Code, 
    title: 'Web Excellence', 
    description: 'Custom websites & e-commerce solutions' 
  },
  { 
    icon: Bot, 
    title: 'AI Automation', 
    description: 'n8n-powered workflow automation' 
  },
  { 
    icon: Workflow, 
    title: 'Smart Integration', 
    description: 'Seamless system connectivity' 
  },
  { 
    icon: Database, 
    title: 'Data Intelligence', 
    description: 'Real-time insights & analytics' 
  }
];

// Product feature icons used in ProductGrid
export const productFeatureIcons = {
  users: Users,
  shield: Shield,
  chart: BarChart,
  message: MessageSquare,
  zap: Zap
};

// Social media icons used in Footer
export const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  Linkedin
};

// Brand icon
export const BrandIcon = Package;

// Helper function to get feature icon by name
export function getFeatureIcon(name) {
  return productFeatureIcons[name] || Sparkles; // Default to Sparkles if icon not found
}

// Helper function to get social icon by name
export function getSocialIcon(name) {
  return socialIcons[name] || Package; // Default to Package if icon not found
}

// Social media links
export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/baobab-stack',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/baobabstack',
    icon: Twitter
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/baobabstack',
    icon: Facebook
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/baobabstack',
    icon: Instagram
  }
]; 
import { 
  Sparkles, 
  Shield, 
  Globe, 
  Rocket, 
  Users, 
  BarChart, 
  MessageSquare, 
  Zap,
  Package,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

// Core feature icons used in Hero section
export const coreFeatures = [
  { 
    icon: Sparkles, 
    title: 'AI-Powered', 
    description: 'Advanced artificial intelligence integration' 
  },
  { 
    icon: Shield, 
    title: 'Enterprise Security', 
    description: 'Bank-grade security protocols' 
  },
  { 
    icon: Globe, 
    title: 'Global Scale', 
    description: 'Worldwide infrastructure' 
  },
  { 
    icon: Rocket, 
    title: 'Fast Deploy', 
    description: 'Quick implementation' 
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
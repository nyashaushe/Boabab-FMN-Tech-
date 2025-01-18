export const products = [
  {
    id: '1',
    name: 'Enterprise CRM Suite',
    description: 'A comprehensive customer relationship management solution designed for modern businesses. Features include contact management, sales pipeline, analytics, and automation.',
    shortDescription: 'Advanced CRM for growing businesses',
    category: 'crm',
    price: 499,
    features: [
      'Contact Management',
      'Sales Pipeline',
      'Analytics Dashboard',
      'Email Integration',
      'Task Automation'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    name: 'Smart Booking System',
    description: 'Streamline your appointment scheduling with our intelligent booking system. Perfect for service-based businesses.',
    shortDescription: 'Intelligent appointment scheduling',
    category: 'booking',
    price: 299,
    features: [
      'Online Scheduling',
      'Calendar Sync',
      'Automated Reminders',
      'Payment Processing',
      'Custom Branding'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    name: 'AI Chatbot Platform',
    description: 'Enhance customer support with our AI-powered chatbot solution. Seamlessly integrate with your existing systems.',
    shortDescription: 'AI-powered customer support',
    category: 'chatbot',
    price: 399,
    features: [
      'Natural Language Processing',
      'Multi-channel Support',
      'Custom Training',
      'Analytics',
      'API Integration'
    ],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000'
  }
] as const;
import React from 'react';

interface SEOContentProps {
  page: 'home' | 'smart-websites' | 'ai-agents';
}

// SEO-optimized content for each page while preserving design
export const seoContent = {
  'home': {
    title: "Custom AI Automation Solutions | Language Centers, Clinics & Business AI Tools",
    metaDescription: "Custom AI automation solutions for language centers, clinics & businesses. AI-powered tools, smart websites & chatbots that boost efficiency. Get your AI assistant today!",
    urlSlug: "/",
    h1: "Build the future with Custom AI Automation Solutions",
    h1Cycle: ["future", "intelligent", "automated", "efficient"],
    subtitle: "Transform your language center, clinic, or business with cutting-edge AI automation solutions, smart websites, and AI-powered tools that work 24/7.",
    services: {
      smartWebsites: {
        title: "Smart Website Development",
        description: "AI-enhanced responsive websites with built-in automation features for superior user experience and conversion optimization."
      },
      aiAgents: {
        title: "AI Agents & Chatbots for Business", 
        description: "Custom AI-powered assistants for appointment booking, customer service, and sales automation tailored for your industry."
      },
      automation: {
        title: "Custom AI Automation Solutions",
        description: "End-to-end AI workflows that connect your business tools and automate repetitive tasks for maximum efficiency."
      },
      customTools: {
        title: "AI-Powered Business Tools",
        description: "Custom AI tools designed to solve specific business challenges with intelligent automation and data-driven insights."
      }
    },
    altTexts: {
      hero: "AI automation dashboard showing business workflow optimization for language centers and clinics",
      services: "Custom AI solutions interface displaying chatbot, website, and automation tools for small businesses"
    }
  },
  
  'smart-websites': {
    title: "Smart Website Development | AI-Enhanced Business Websites",
    metaDescription: "Smart website development with AI integration. Responsive, fast-loading business websites with automation features. Perfect for modern businesses seeking growth.",
    urlSlug: "/smart-websites",
    h1: "Smart Website Development That Drives Business Growth",
    subtitle: "AI-enhanced responsive websites designed for performance, conversion optimization, and seamless user experiences that keep customers engaged.",
    altTexts: {
      hero: "Modern responsive website design with AI-powered features and automation integration",
      showcase: "Portfolio of smart business websites featuring advanced UX design and conversion optimization"
    }
  },
  
  'ai-agents': {
    title: "AI Agents and Chatbots for Business | Custom AI Assistants",
    metaDescription: "AI agents and chatbots for business automation. Custom AI assistants for appointment booking, customer service & sales. Perfect for clinics, language centers & e-commerce.",
    urlSlug: "/ai-agents-chatbots", 
    h1: "AI Agents & Chatbots That Transform Business Operations",
    subtitle: "Custom AI-powered assistants designed for your industry - from appointment booking to customer service automation, built to work seamlessly with your existing systems.",
    altTexts: {
      hero: "AI chatbot interface showing automated customer service and appointment booking for healthcare and education",
      examples: "Industry-specific AI agents demonstrating automated workflows for clinics, language centers, and e-commerce businesses"
    }
  }
};

// FAQ content for rich snippets
export const faqContent = {
  home: [
    {
      question: "What are custom AI automation solutions?",
      answer: "Custom AI automation solutions are AI-powered tools designed specifically for your business needs. They can automate workflows, handle customer service, manage appointments, and perform complex tasks that typically require human intervention, saving time and reducing errors."
    },
    {
      question: "How long does it take to develop AI agents for my business?", 
      answer: "Development time varies based on complexity, but most AI agents and chatbots are completed within 2-4 weeks. Simple chatbots can be ready in 1-2 weeks, while complex automation systems may take 4-6 weeks including testing and integration."
    },
    {
      question: "Do you develop AI solutions for language learning centers?",
      answer: "Yes, we specialize in AI automation for language learning centers including automated student registration, progress tracking, scheduling systems, and AI tutoring assistants that can help students practice conversation and check homework."
    },
    {
      question: "What industries benefit most from AI automation solutions?",
      answer: "Language learning centers, medical clinics, e-commerce stores, beauty salons, and private tutoring businesses see the greatest benefits from AI automation. These industries handle repetitive tasks, scheduling, and customer interactions that AI can streamline effectively."
    },
    {
      question: "Can AI chatbots integrate with my existing business tools?",
      answer: "Absolutely. Our AI agents integrate seamlessly with popular business tools including calendars, CRM systems, payment processors, email platforms, and most SaaS applications through APIs and webhooks."
    }
  ],
  
  smartWebsites: [
    {
      question: "What makes a website 'smart' compared to regular websites?",
      answer: "Smart websites include AI-powered features like automated customer interactions, dynamic content personalization, intelligent lead capture, and built-in analytics that help optimize performance automatically."
    },
    {
      question: "How fast do smart websites load compared to traditional sites?",
      answer: "Our smart websites are optimized for speed with Core Web Vitals scores above 90. They typically load 40-60% faster than traditional websites while providing enhanced functionality."
    },
    {
      question: "Do smart websites work well for e-commerce and service businesses?",
      answer: "Yes, smart websites are particularly effective for e-commerce stores, service businesses, clinics, and educational institutions as they can automate customer inquiries, booking processes, and provide personalized user experiences."
    },
    {
      question: "What's included in smart website development?",
      answer: "Smart website development includes responsive design, AI chatbot integration, automated lead capture, performance optimization, SEO setup, content management system, and ongoing support for the first month."
    },
    {
      question: "Can you redesign my existing website to be smart?",
      answer: "Absolutely. We can transform your existing website into a smart website by adding AI features, improving performance, enhancing user experience, and integrating automation tools while preserving your brand identity."
    }
  ],
  
  aiAgents: [
    {
      question: "What types of AI agents do you develop for businesses?",
      answer: "We develop AI customer service agents, appointment booking bots, sales assistants, educational tutors, clinic assistants, and custom AI tools for specific business workflows and industry requirements."
    },
    {
      question: "How do AI agents help language learning centers specifically?",
      answer: "AI agents for language centers can handle student enrollment, schedule classes, provide 24/7 homework help, practice conversation with students, track learning progress, and manage parent communications automatically."
    },
    {
      question: "Can AI chatbots handle complex customer inquiries?",
      answer: "Yes, our AI chatbots use advanced language models and can handle complex inquiries, multi-step processes, and contextual conversations. They can escalate to humans when needed and learn from interactions to improve over time."
    },
    {
      question: "Do AI agents work for medical clinic appointment booking?",
      answer: "Absolutely. AI agents for clinics can manage appointment scheduling, send reminders, handle cancellations, verify insurance information, and provide basic medical information while maintaining HIPAA compliance where required."
    },
    {
      question: "What's the ROI of implementing AI agents in my business?",
      answer: "Most businesses see 30-50% reduction in manual work, 24/7 customer availability, 40% faster response times, and improved customer satisfaction. The automation typically pays for itself within 3-6 months through time savings and increased conversions."
    }
  ]
};

// Internal linking suggestions
export const internalLinks = {
  home: [
    { text: "smart website development", url: "/smart-websites", context: "Learn more about our" },
    { text: "AI agents and chatbots for business", url: "/ai-agents-chatbots", context: "Discover our" },
    { text: "AI automation services", url: "/#services", context: "Explore our complete" }
  ],
  
  smartWebsites: [
    { text: "AI agents and chatbots", url: "/ai-agents-chatbots", context: "Complement your smart website with" },
    { text: "custom AI automation solutions", url: "/", context: "Explore our full range of" },
    { text: "AI-powered business tools", url: "/#services", context: "Enhance your website with" }
  ],
  
  aiAgents: [
    { text: "smart website development", url: "/smart-websites", context: "Pair your AI agents with" },
    { text: "custom AI automation solutions", url: "/", context: "Discover our complete" },
    { text: "AI-powered workflow automation", url: "/#services", context: "Learn about our" }
  ]
};

export default function SEOContent({ page }: SEOContentProps) {
  const content = seoContent[page];
  
  React.useEffect(() => {
    // Update document title and meta description based on current page
    document.title = content.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.metaDescription);
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://xonai.dev${content.urlSlug}`);
    }
    
    // Update Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', content.title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', content.metaDescription);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', `https://xonai.dev${content.urlSlug}`);
    }
    
    // Update Twitter
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', content.title);
    }
    
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', content.metaDescription);
    }
    
    // Force Google to recognize page changes
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large');
    }
    
  }, [content]);

  return null;
}
export const brandConfig = {
  // Company Information
  company: {
    logo: "/logos/logo2.png",
    name: "ExpenseFlow Innovation",
    tagline: "Smart Expense Management for Modern Teams",
    description: "We help businesses streamline their expense tracking, automate reimbursements, and gain real-time financial insights.",
    founded: "2024",
    location: "San Francisco, CA",
    email: "hello@expenseflow.com",
    phone: "+1 (555) 123-4567",
    address: "123 Business Ave, Suite 100, San Francisco, CA 94105",
  },

  // Product Information
  product: {
    name: "ExpenseFlow",
    shortName: "Flow",
    tagline: "Track. Manage. Save.",
    description: "The all-in-one expense tracking platform that saves you time and money with intelligent automation and real-time insights.",
    version: "2.0",
  },

  // Navigation
  navigation: {
    logoText: "ExpenseFlow",
    items: [
      { label: "Home", path: "/" },
      { label: "Product", path: "/product" },
      { label: "Features", path: "/features" },
      { label: "Pricing", path: "/pricing" },
      { label: "About", path: "/about" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact", path: "/contact" },
    ],
    ctaButton: {
      label: "Request Demo",
      path: "/request-demo",
    },
  },

  hero: {
    headline: "Simplify Expense Tracking for Your Entire Team",
    subheadline: "Automate receipts, track spending in real-time, and get instant insights. Join 10,000+ businesses saving 15+ hours per month.",
    primaryCTA: {
      label: "Start Free Trial",
      subtext: "14-day free trial • No credit card required",
    },
    secondaryCTA: {
      label: "Contact Us",
    },
    stats: [
      { value: 10000, suffix: "+", label: "Active users", icon: "Users" },
      { value: 15, suffix: "+", label: "Hours saved/month", icon: "Clock" },
      { value: 98, suffix: "%", label: "Customer satisfaction", icon: "Smile" },
      { value: 120, suffix: "+", label: "Finance teams", icon: "Building" }
    ]
  },

  testimonials: {
    headline: "Loved by teams worldwide",
    subheadline:
      "See what customers say about using our white-label SaaS platform",

    items: [
      {
        name: "Sarah Johnson",
        role: "Founder",
        company: "NovaTech",
        message:
          "This platform helped us launch our SaaS product in weeks instead of months. The white-label flexibility is exactly what we needed.",
        rating: 5,
      },
      {
        name: "Daniel Kim",
        role: "Product Manager",
        company: "BrightScale",
        message:
          "Clean UI, powerful backend, and fully customizable branding. It feels like it was built just for us.",
        rating: 5,
      },
      {
        name: "Ayesha Patel",
        role: "CEO",
        company: "Cloudverse",
        message:
          "We replaced 3 different tools with this. It simplified everything and saved us a lot of operational cost.",
        rating: 4,
      },
    ],
  },

  // Product Page config
  productPage: {
    hero: {
      badge: "Expense Management Platform",
      title: "Automate Expense Management",
      highlight: "From Receipt to Reimbursement",
      description:
        "Streamline expense reporting, approvals, compliance, and reimbursements with one powerful platform.",
      primaryCta: {
        label: "Request Demo",
        href: "/request-demo",
      },
      secondaryCta: {
        label: "View Pricing",
        href: "/pricing",
      },
    },

    overview: {
      title: "Everything You Need To Manage Expenses",
      description:
        "Replace spreadsheets, emails, and manual approvals with a modern expense management system designed for growing businesses.",
    },

    steps: [
      {
        number: "01",
        title: "Capture Expenses",
        description:
          "Employees upload receipts or forward expense emails directly into the platform.",
      },
      {
        number: "02",
        title: "Automated Processing",
        description:
          "AI extracts expense details, categorizes transactions, and validates policy compliance.",
      },
      {
        number: "03",
        title: "Approval Workflow",
        description:
          "Managers review and approve expenses through customizable workflows.",
      },
      {
        number: "04",
        title: "Reporting & Reimbursement",
        description:
          "Generate reports, sync with accounting systems, and reimburse employees faster.",
      },
    ],

    features: [
      {
        icon: "receipt",
        title: "Smart Receipt Capture",
        description:
          "Automatically extract expense details from receipts using AI-powered OCR.",
      },
      {
        icon: "workflow",
        title: "Approval Workflows",
        description:
          "Create multi-level approval workflows that match your organization structure.",
      },
      {
        icon: "credit-card",
        title: "Corporate Card Sync",
        description:
          "Automatically reconcile corporate card transactions with submitted expenses.",
      },
      {
        icon: "analytics",
        title: "Real-Time Analytics",
        description:
          "Track spending trends and gain complete visibility into company expenses.",
      },
      {
        icon: "file-check",
        title: "Policy Compliance",
        description:
          "Automatically enforce expense policies and reduce compliance risks.",
      },
      {
        icon: "shield",
        title: "Audit Trail",
        description:
          "Maintain a complete audit trail for every transaction and approval.",
      },
    ],

    benefits: {
      bg_image_url: "/product/team.jpeg",
      title: "Why Teams Choose Us",
      description:
        "Save time, reduce costs, and gain complete visibility into organizational spending.",
      items: [
        "Reduce expense processing time by 80%",
        "Eliminate manual data entry",
        "Improve compliance and audit readiness",
        "Gain real-time spending visibility",
        "Automate reimbursements",
        "Integrate with existing finance tools",
      ],
    },

    integrations: [
      "QuickBooks",
      "Xero",
      "SAP",
      "Oracle",
      "Slack",
      "Microsoft Teams",
      "Google Workspace",
      "NetSuite",
    ],

    security: {
      bg_image_security: "/product/security.jpg",
      title: "Enterprise-Grade Security",
      description:
        "Protect sensitive financial data with secure infrastructure, encryption, role-based access control, and audit logs.",
    },
  },

  // Features Page
  features: {
    badge : "Powerful Features for Modern Expense Management",
    headline: "Everything You Need to Master Expense Management",
    subheadline: "Powerful features designed to save you time and reduce errors",
    highlights : [
      {title : "Automated Workflow" , icon : "Workflow"},
      {title : "Real - Time Analytics" , icon : "BarChart3"},
      {title : "Enterprise - Grade Security" , icon : "ShieldCheck"},
      {title : "Mobile Friendly" , icon : "Smartphone"}
    ],
    mainFeatures: [
      {
        icon: "receipt",
        title: "Smart Receipt Scanning",
        description: "AI-powered OCR automatically extracts data from receipts. Just snap a photo and we handle the rest.",
        benefits: ["99% accuracy", "Supports 50+ currencies", "Instant processing"],
      },
      {
        icon: "automation",
        title: "Automated Workflows",
        description: "Set up custom approval flows, automatic categorization, and policy enforcement without manual intervention.",
        benefits: ["Custom rules", "Multi-level approvals", "Policy compliance"],
      },
      {
        icon: "analytics",
        title: "Real-Time Analytics",
        description: "Get instant visibility into spending patterns with interactive dashboards and customizable reports.",
        benefits: ["Live dashboards", "Export reports", "Budget tracking"],
      },
      {
        icon: "integration",
        title: "Seamless Integrations",
        description: "Connect with your favorite tools including QuickBooks, Xero, Slack, and 50+ other platforms.",
        benefits: ["QuickBooks sync", "Xero integration", "API access"],
      },
      {
        icon: "mobile",
        title: "Mobile First",
        description: "Capture expenses on the go with our iOS and Android apps. Full functionality in your pocket.",
        benefits: ["iOS & Android", "Offline mode", "Push notifications"],
      },
      {
        icon: "security",
        title: "Enterprise Security",
        description: "Bank-level encryption, SOC 2 compliance, and advanced access controls keep your data safe.",
        benefits: ["SOC 2 Type II", "256-bit encryption", "SSO support"],
      },
    ],
  },

  // Pricing Page
  pricing: {
    headline: "Simple, Transparent Pricing",
    subheadline: "Choose the plan that fits your team. All plans include a 14-day free trial.",
    plans: [
      {
        name: "Starter",
        description: "Perfect for small teams getting started",
        price: {
          monthly: 19,
          yearly: 15,
          currency: "$",
        },
        features: [
          "Up to 5 users",
          "100 receipts/month",
          "Basic reports",
          "Email support",
          "Mobile app access",
          "1 bank connection",
        ],
        cta: "Start Free Trial",
        popular: false,
        href : "/request-demo"
      },
      {
        name: "Professional",
        description: "Best for growing businesses",
        price: {
          monthly: 49,
          yearly: 39,
          currency: "$",
        },
        features: [
          "Up to 25 users",
          "Unlimited receipts",
          "Advanced analytics",
          "Priority support",
          "Custom workflows",
          "Unlimited bank connections",
          "API access",
          "Integrations",
        ],
        cta: "Start Free Trial",
        popular: true,
        href : "/request-demo"
      },
      {
        name: "Enterprise",
        description: "For large organizations with custom needs",
        price: {
          monthly: null,
          yearly: null,
          currency: "$",
          custom: "Custom",
        },
        features: [
          "Unlimited users",
          "Unlimited everything",
          "Dedicated account manager",
          "24/7 phone support",
          "Custom integrations",
          "SLA guarantee",
          "On-premise option",
          "Advanced security",
        ],
        cta: "Contact Sales",
        popular: false,
        href : "/contact"
      },
    ],
  },

  frequentlyAskedQuestions: {
    faq: [
      {
        question: "Can I change plans later?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
      },
      {
        question: "Is there a long-term contract?",
        answer:
          "No, all plans are month-to-month. You can cancel anytime without penalties.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, Amex) and can arrange invoice billing for Enterprise plans.",
      },
      {
        question: "Do you offer discounts for nonprofits?",
        answer:
          "Yes! We offer a 20% discount for registered nonprofits. Contact our sales team to learn more.",
      },
      {
        question: "Is there a free trial available?",
        answer:
          "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start.",
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Yes, you can cancel your subscription anytime from your account dashboard without any cancellation fees.",
      },
      {
        question: "Is my financial data secure?",
        answer:
          "Absolutely. We use bank-level encryption and follow strict security standards to keep your data safe.",
      },
      {
        question: "Can I add multiple users to my account?",
        answer:
          "Yes, you can invite team members, assign roles, and manage permissions based on your plan.",
      },
      {
        question: "Does the platform support mobile apps?",
        answer:
          "Yes, we provide mobile apps for both iOS and Android so you can manage expenses on the go.",
      },
      {
        question: "Do you integrate with accounting tools?",
        answer:
          "Yes, we integrate with popular tools like QuickBooks, Xero, and other accounting software.",
      },
    ],
  },

  // About Page
  about: {
    heroImage: "/about/company.jpg",
    headline: "We're on a Mission to Simplify Business Expenses",
    subheadline: "Founded in 2024, we've helped thousands of businesses take control of their spending",
    story: {
      title: "Our Story",
      content: "ExpenseFlow was born from frustration. Our founders, former CFOs at fast-growing startups, spent countless hours chasing receipts, manually entering data, and dealing with clunky expense software. They knew there had to be a better way.",
      content2: "Today, ExpenseFlow serves over 10,000 businesses worldwide, from small startups to Fortune 500 companies. We're committed to building the most intuitive, powerful expense management platform on the market.",
      bgImage_ofGrid: "/about/happy_customer.webp"
    },
    values: [
      {
        icon: "users",
        title: "Customer First",
        description: "Every feature we build starts with understanding our customers' pain points.",
      },
      {
        icon: "zap",
        title: "Move Fast",
        description: "We iterate quickly based on feedback to deliver value faster.",
      },
      {
        icon: "shield",
        title: "Trust & Security",
        description: "Your financial data deserves the highest level of protection.",
      },
      {
        icon: "heart",
        title: "Transparency",
        description: "Clear pricing, honest communication, no hidden fees.",
      },
    ],
    team: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-Founder",
        bio: "Former CFO at TechStart. MBA from Stanford.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        name: "Michael Rodriguez",
        role: "CTO & Co-Founder",
        bio: "Ex-Google engineer. Built finance systems at scale.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Emily Watson",
        role: "Head of Product",
        bio: "15 years in fintech. Previously at Stripe.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
      {
        name: "David Park",
        role: "Head of Engineering",
        bio: "Scaled engineering teams at Uber and Airbnb.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
    ],
  },

  // Contact Page
  contact: {
    headline: "Get in Touch",
    subheadline: "Have questions? We'd love to hear from you. Our team typically responds within 24 hours.",
    ResponseTime: "24h",
    highlights: [
      "24 - 48h guarenteed response",
      "Real human support (no bots)",
      "Enterprise - grade assistance"
    ],
    steps: [
      {
        title: "Send your message",
        description: "Fill out the form with your details and query.",
      },
      {
        title: "We review it",
        description: "Our team analyzes your request within a few hours.",
      },
      {
        title: "Get a response",
        description: "We reply with a clear solution or next steps.",
      },
    ],
    departments: [
      {
        name: "Sales",
        description: "Questions about pricing or features?",
        email: "sales@expenseflow.com",
        phone: "+1 (555) 123-4567",
      },
      {
        name: "Support",
        description: "Need help with your account?",
        email: "support@expenseflow.com",
        phone: "+1 (555) 123-4568",
      },
      {
        name: "Partnerships",
        description: "Interested in partnering with us?",
        email: "partners@expenseflow.com",
        phone: "+1 (555) 123-4569",
      },
    ],
    form: {
      fields: [
        { name: "name", label: "Name", type: "text", required: true, placeholder: "John Doe", icon: "name" },
        { name: "email", label: "Email", type: "email", required: true, placeholder: "john@gmail.com", icon: "email" },
        { name: "company", label: "Company", type: "text", required: false, placeholder: "XYZ Techno", icon: "company" },
        { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Your message here", icon: "message" },
      ],
      submitButton: "Send Message",
      successMessage: "Thanks for reaching out! We'll get back to you soon.",
    },
  },

  // Privacy policy
  privacyPolicy: {
    headline: "Privacy Policy",
    subheadline:
      "We are committed to protecting your personal data and ensuring transparency in how we collect, use, and safeguard your information.",

    lastUpdated: "June 2026",

    sections: [
      {
        title: "Information We Collect",
        icon: "user",
        content:
          "We collect information you provide such as name, email, company details, and usage data. We may also collect device information like IP address, browser type, and operating system to improve our services.",
      },
      {
        title: "How We Use Your Information",
        icon: "database",
        content:
          "We use your data to operate, maintain, and improve our platform, process transactions, provide customer support, and send important updates. We never sell your personal data.",
      },
      {
        title: "Data Sharing",
        icon: "share",
        content:
          "We may share your information with trusted third-party service providers who assist in operating our platform. All partners are bound by strict confidentiality agreements.",
      },
      {
        title: "Data Security",
        icon: "shield",
        content:
          "We use industry-standard encryption and security measures to protect your data. While we strive for maximum security, no system is completely secure.",
      },
      {
        title: "Your Rights",
        icon: "check",
        content:
          "You have the right to access, update, or delete your personal information. You can also request a copy of your data or withdraw consent at any time.",
      },
      {
        title: "Cookies & Tracking",
        icon: "eye",
        content:
          "We use cookies to enhance user experience, analyze traffic, and improve our services. You can disable cookies in your browser settings if you prefer.",
      },
      {
        title: "Changes to Policy",
        icon: "refresh",
        content:
          "We may update this Privacy Policy from time to time. Changes will be reflected on this page with an updated revision date.",
      },
    ],

    contact: {
      email: "support@expenseflow.com",
      message:
        "If you have any questions about this Privacy Policy, feel free to contact us.",
    },
  },

  // Terms of service page config
  termsOfService: {
    headline: "Terms of Service",
    subheadline:
      "These Terms govern your use of our platform. By using our services, you agree to these terms and conditions.",

    lastUpdated: "June 2026",

    sections: [
      {
        title: "Acceptance of Terms",
        icon: "check",
        content:
          "By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use the platform.",
      },
      {
        title: "Use of Services",
        icon: "user",
        content:
          "You agree to use our platform only for lawful purposes and in accordance with all applicable laws and regulations.",
      },
      {
        title: "User Accounts",
        icon: "shield",
        content:
          "You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.",
      },
      {
        title: "Prohibited Activities",
        icon: "lock",
        content:
          "You may not misuse the platform, attempt unauthorized access, or engage in activities that harm the system or other users.",
      },
      {
        title: "Payments & Billing",
        icon: "database",
        content:
          "Some features may require payment. All billing is processed securely, and subscription fees are non-refundable unless stated otherwise.",
      },
      {
        title: "Service Availability",
        icon: "refresh",
        content:
          "We strive for continuous availability but do not guarantee uninterrupted access. Maintenance or downtime may occur.",
      },
      {
        title: "Termination",
        icon: "shield",
        content:
          "We reserve the right to suspend or terminate accounts that violate these Terms or misuse the platform.",
      },
      {
        title: "Limitation of Liability",
        icon: "eye",
        content:
          "We are not liable for indirect, incidental, or consequential damages resulting from your use of the platform.",
      },
      {
        title: "Changes to Terms",
        icon: "refresh",
        content:
          "We may update these Terms at any time. Continued use of the platform means you accept the updated Terms.",
      },
    ],

    contact: {
      email: "support@expenseflow.com",
      message:
        "If you have any questions about these Terms, feel free to contact us anytime.",
    },
  },

  // Request demo page config.
  requestDemo: {
    headline: "Request a Personalized Demo",
    subheadline:
      "See how ExpenseFlow can transform your expense management. Book a 30-minute session with our product experts.",

    benefits: [
      "Live walkthrough of all features",
      "See how it works with your workflow",
      "Get answers to all your questions",
      "Custom pricing for your team size",
    ],

    credebilityText: "Trusted by growing teams to simplify expense management and improve financial control.",

    form: {
      fields: [
        { name: "fullName", label: "Full Name", type: "text", required: true, icon: "user" },
        { name: "workEmail", label: "Work Email", type: "email", required: true, icon: "mail" },
        { name: "company", label: "Company Name", type: "text", required: true, icon: "building-2" },
        {
          name: "teamSize",
          label: "Team Size",
          type: "select",
          required: true,
          icon: "users",
          options: [
            {
              value: "1-10",
              label: "1–10 people",
              description: "Startup / small team",
              icon: "users",
            },
            {
              value: "11-50",
              label: "11–50 people",
              description: "Growing company",
              icon: "building-2",
            },
            {
              value: "51-200",
              label: "51–200 people",
              description: "Mid-size organization",
              icon: "layers",
            },
            {
              value: "201-500",
              label: "201–500 people",
              description: "Large team",
              icon: "building",
            },
            {
              value: "500+",
              label: "500+ people",
              description: "Enterprise scale",
              icon: "crown",
            },
          ],
        },

        { name: "phone", label: "Phone Number", type: "tel", required: false, icon: "phone" },
        { name: "preferredDate", label: "Preferred Date", type: "date", required: true, icon: "calendar" },
        { name: "message", label: "Additional Notes", type: "textarea", required: false, icon: "messageSquare" },
      ],

      submitButton: "Request Demo",
      successMessage:
        "Demo request received! Our team will contact you within 24 hours to schedule.",
    },
    whatHappenNext: {
      headline: "What happens next ?",
      subheadline: "Simple 3-step process to get your personalized demo",
      nextSteps: [
        {
          title: "Fill the form",
          description: "Share your basic details to help us personalize your demo.",
        },
        {
          title: "Schedule session",
          description: "Our team will contact you within 24 hours to confirm timing.",
        },
        {
          title: "Live demo",
          description: "Get a tailored walkthrough based on your team’s needs.",
        },
      ],
    },
  },

  // Footer
  footer: {
    description:
      "Streamline expense management with automated approvals, real-time visibility, and seamless reimbursements.",

    links: {
      product: [
        { label: "Product", path: "/product" },
        { label: "Features", path: "/features" },
        { label: "Pricing", path: "/pricing" },
        { label: "Request Demo", path: "/request-demo" },
      ],


      company: [
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "FAQ", path: "/faq" },
      ],


      legal: [
        { label: "Privacy Policy", path: "/privacy-policy" },
        { label: "Terms of Service", path: "/terms-of-service" },
      ],
    },

    social : {
      instagram : "https://instagram.com/expenseInnovation",
      facebook : "https://facebook.com/expenseInnovation",
      linkedin : "https://linkedin.com/in/expenseInnovation"
    },
  },
};
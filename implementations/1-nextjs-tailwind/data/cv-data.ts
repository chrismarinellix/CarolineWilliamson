export interface Experience {
  company: string
  title: string
  period: string
  description: string
  achievements: string[]
}

export interface Qualification {
  degree: string
  field: string
  institution: string
}

export interface CVData {
  personal: {
    name: string
    title: string
    phone: string
    email: string
    linkedin: string
  }
  summary: string
  keyDeliverables: {
    category: string
    items: string[]
  }[]
  results: {
    title: string
    description: string
  }[]
  experience: Experience[]
  qualifications: Qualification[]
  languages: string[]
}

export const cvData: CVData = {
  personal: {
    name: "Caroline Williamson",
    title: "Executive Technology Leader",
    phone: "0458 024 081",
    email: "cparuit@gmail.com",
    linkedin: "https://www.linkedin.com/in/caroline-williamson-technology"
  },
  summary: "An Executive Technology Leader with 20+ years of success developing and executing technology strategies, implementing digital transformation initiatives, and driving operations to optimise business outcomes. Strong consulting and relationship building skills with business executives, stakeholders, and strategic partners with the ability to present with impact and influence. Builds high performing teams, inspiring others to innovate and collaborate to achieve business goals. Led teams of 250+ FTE in complex and matrixed environments, managed budgets of $300M+, supporting 40k employees and 5 million customers. Broad business and technology executive experience in Energy, Financial Services, Telecommunications, and Consulting globally.",
  keyDeliverables: [
    {
      category: "Strategy & Leadership",
      items: ["Technology Strategy & Roadmap", "Delivery Executive & Sponsor", "Digital Transformation", "Technology Simplification"]
    },
    {
      category: "People & Operations",
      items: ["Leads High Performing Teams", "Business Relationship Management", "Vendor & Contract Management", "Global Multifunctional Teams"]
    },
    {
      category: "Technology & Innovation",
      items: ["Data & AI Strategy", "Enterprise Platforms", "Cyber & Information Security", "Enterprise Architecture"]
    }
  ],
  results: [
    {
      title: "Technology Strategy and Roadmap",
      description: "Partnered with Business Executives to understand business strategy, developed technology strategy to achieve business growth, drive simplification, optimise application portfolio, reduce operational risks, and adhere to regulatory requirements."
    },
    {
      title: "Transformation and Execution Leadership",
      description: "Led business transformation initiatives aimed at optimising efficiency, reducing costs, and fostering sustainable growth through implementation of innovative strategies and best practices."
    },
    {
      title: "Enterprise Platforms, Data & AI Strategy and Management",
      description: "Led design and architecture for enterprise and data solutions leveraging existing platforms and reusable architectures, leveraging best practices, and new emerging technologies to deliver business outcomes."
    },
    {
      title: "Physical, Cyber & Information Security",
      description: "Implemented strategies and initiatives to protect Customers and Employees from security threats."
    },
    {
      title: "Builds High Performance Teams",
      description: "Drives high accountability and performance within multi-functional teams. Has led teams of 250+ employees and achieved engagement scores from 67% to 84%."
    },
    {
      title: "Technology Thought Leader",
      description: "Stays up to date with emerging trends to unlock new business opportunities. Successful negotiation and influencing skills with business stakeholders and strategic partners to achieve technology decisions and outcomes."
    }
  ],
  experience: [
    {
      company: "Jemena",
      title: "General Manager Corporate Technology, Data, Analytics and AI",
      period: "June 2024 – Current",
      description: "Jemena owns and operates over $12 billion in energy assets, supplying essential services everyday to millions of households and businesses across the East Coast of Australia and the Northern Territory. In this role, I provide strategic leadership, drive end-to-end digital outcomes for Corporate Functions and implement Data and AI capabilities across Jemena and Zinfra.",
      achievements: [
        "Developed the Group's first Technology Strategy and 5-Year Roadmap for Corporate functions setting clear vision for the future.",
        "Led Data Strategy, Data Governance Policies and Enterprise Data Platform implementation.",
        "Championed AI Roadmap, leading the rollout of Microsoft Copilot and other AI Use Cases to optimise business processes, workflows and customer experience.",
        "Launched AI Week with 12 technology strategic partners including Microsoft, AWS, ServiceNow, to educate our teams and showcase the possibilities of AI.",
        "Leading the SAP Strategy and Planning for the upcoming S4Hana Upgrade.",
        "Restructured the team and brought in new talent to deliver on our strategies and plans, fostering a culture of innovation and excellence."
      ]
    },
    {
      company: "Nutun",
      title: "Chief Technology Officer",
      period: "June 2023 – May 2024",
      description: "Nutun Australia is comprised of Recoveries Corp, Milton and Graham and Mason Black Mendelson and provides debt recoveries management, commercial litigation, and legal services to some of Australia's top 50 ASX companies in the areas of banking, government, utilities, telecommunication, and insurance.",
      achievements: [
        "Reporting to the CEO, led the IT due diligence process for the sale of the Australian division.",
        "Conducted a strategic review of the technology landscape; evaluated current state, provided a recommendation on future state technology investments and strategic implementation roadmap to increase revenue, optimise operations and enhance customer journeys. Presented the report to a Board Member.",
        "Led the technical integration of Milton and Graham (new acquisition) with Recoveries Corp."
      ]
    }
  ],
  qualifications: [
    {
      degree: "Bachelor of Arts",
      field: "Chinese and International Business",
      institution: "Deakin University"
    },
    {
      degree: "Bachelor of Commerce",
      field: "Economics and Marketing",
      institution: "Deakin University"
    }
  ],
  languages: ["Fluent in French"]
}
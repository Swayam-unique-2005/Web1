export interface Program {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  imagePrompt: string;
}

export const programs: Program[] = [
  {
    id: "p1",
    slug: "mindful-productivity",
    name: "Mindful Productivity Masterclass",
    description: "Learn to achieve more by doing less. A 4-week course on integrating mindfulness into your daily workflow to prevent burnout.",
    price: 199.00,
    duration: "4 Weeks",
    level: "Intermediate",
    imagePrompt: "person journaling in a peaceful sunlit room, minimalist aesthetic, calm atmosphere",
  },
  {
    id: "p2",
    slug: "full-stack-foundations",
    name: "Full Stack Foundations",
    description: "From zero to hero. Master the basics of modern web development with React, Node.js, and database design.",
    price: 499.00,
    duration: "12 Weeks",
    level: "Beginner",
    imagePrompt: "close up of code on a laptop screen with a cup of coffee, late night coding vibe, neon accents",
  },
  {
    id: "p3",
    slug: "creative-design-systems",
    name: "Architecting Design Systems",
    description: "For senior designers and developers. Learn how to build, scale, and maintain comprehensive design systems for enterprise.",
    price: 299.00,
    duration: "6 Weeks",
    level: "Advanced",
    imagePrompt: "abstract geometric shapes organized in a grid, clean design system concept, bauhaus style",
  },
  {
    id: "p4",
    slug: "digital-marketing-bootcamp",
    name: "Digital Growth Bootcamp",
    description: "Master SEO, paid ads, and content strategy to grow your business online. Practical, results-driven curriculum.",
    price: 349.00,
    duration: "8 Weeks",
    level: "Beginner",
    imagePrompt: "analytics dashboard on a tablet with a stylus, business growth concept, professional setting",
  },
];

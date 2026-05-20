export const aboutSectionContent = {
  title: "Hey there!",
  body: `I'm Noam, an illustrator based in Rotterdam. I have a passion for comics, linocut print, and traditional techniques. You can usually find me at my sweet studio at the heart of historical delfshaven.

My projects typically begin with a nerdy dive into some random curiosity. Then, with details and care, an illustration is born!`,
  whatIDoTitle: "what i do:",
  whatIDoItems: ["comic book", "workshops", "ART MARKETS"],
} as const;

export const aboutWorkExperienceContent = {
  title: "Work Experience",
  experiences: [
    {
      role: "Freelance Illustrator",
      period: "2022 - Present",
      description:
        "Visual communication and illustration for cultural and commercial clients, including signage, branding, window displays and visual educational materials.",
    },
    {
      role: "Workshop Designer & Facilitator - Hortus Leiden",
      period: "2024–2025",
      description:
        "Design and facilitation of illustration workshops combining drawing, storytelling and sciences for diverse groups.",
    },
    {
      role: "Commissioned Workshop - Bibliotheek Rijn en Venen",
      period: "August 2025",
      description:
        "Developed and led custom illustration workshops for visitors of all ages.",
    },
    {
      role: "Education & Illustration Intern - Hortus Leiden",
      period: "Feb–June 2024",
      description:
        "Created botanical illustrations for a scientific research project and developed thematic educational tours integrating visual storytelling.",
    },
    {
      role: "Commissioned Illustrator - Hortus Alkmaar",
      period: "2024–2025",
      description:
        "Illustration and visual design for educational materials. Created an illustrated visitor map to support independent and guided learning routes.",
    },
    {
      role: "Bachelor of Arts (Illustration)",
      period: "2021-2025",
      description:
        "Willem de Kooning Academy, Rotterdam University of Applied Sciences",
    },
  ],
} as const;

export const projectsSectionContent = {
  body: "My creative process is diverse: I find calm in slow, manual techniques, playful joy in digital illustration, and clarity in print.",
} as const;

export const contactSectionContent = {
  title: "Lets Work Together",
  commissionPrompt:
    "Are you interested in in a commissioned project or a workshop? You can start by filing a commission form.",
  availabilityText: "I am also available via mail and on social media",
} as const;

export const commissionSectionContent = {
  title: "how to comission a project",
  description:
    "Hi! I'm really glad you're interested in working together. For me, good collaboration means clear and respectful communication, while also leaving space for creativity and experimentation. I like to keep the process structured and straightforward, so we can focus on making great work together.Here's how we can work together, step by step, to bring your ideas to life:",
  steps: [
    {
      title: "Step 1 - First Message",
      body: "Send me an email with your idea, goals, and timeline so I can understand what you need.",
    },
    {
      title: "Step 2 - Brief And References",
      body: "Share references, style direction, and any must-have details so we align early.",
    },
    {
      title: "Step 3 - Scope And Quote",
      body: "I send a clear proposal with pricing, timeline, and deliverables before we begin.",
    },
    {
      title: "Step 4 - Sketch And Feedback",
      body: "You receive concept sketches, and we refine the direction together through feedback.",
    },
    {
      title: "Step 5 - Final Artwork",
      body: "After approval, I deliver the final files in the agreed format, ready for use.",
    },
  ],
  ctaLabel: "Start Commission Request",
} as const;

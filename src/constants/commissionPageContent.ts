export type CommissionPageStep = {
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const commissionPageContent = {
  title: "how to comission a project",
  description:
    "Hi! I'm really glad you're interested in working together. For me, good collaboration means clear and respectful communication, while also leaving space for creativity and experimentation. I like to keep the process structured and straightforward, so we can focus on making great work together.Here's how we can work together, step by step, to bring your ideas to life:",
  finalCtaLabel: "Start Commission Request",
  finalCtaHref: "mailto:noamhen100@gmail.com?subject=Commission%20Request",
  steps: [
    {
      title: "Commission Form",
      body: "tell me about your project (i.e. illustration, workshop, art work piece...).",
      ctaLabel: "Get the form here!",
      ctaHref:
        "mailto:noamhen100@gmail.com?subject=Commission%20Form%20Request",
    },
    {
      title: "Project outline",
      body: "Based on you answers I'll prepare a project outline, this will include a schedule,  pricing, and my suggested approach.",
    },
    {
      title: "finalize the order",
      body: "you may suggest any changes or correction to the project outline. Once we finalize all the details you will receive a contract to finalize the commission.",
    },
    {
      title: "work in progress",
      body: "This stage is collaborative - you'll will receive drafts and sketches, and have the chance to give feedback during agreed revision rounds, while I guide the work toward a polished final result.",
    },
    {
      title: "finish!",
      body: "You will receive the final version of you project including any instructions that may be needed.",
    },
  ] as CommissionPageStep[],
} as const;

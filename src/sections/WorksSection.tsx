type WorkItem = {
  title: string;
  description: string;
};

type WorksSectionProps = {
  featuredWorks: WorkItem[];
};

function WorksSection({ featuredWorks }: WorksSectionProps) {
  return (
    <section
      id="works"
      className="flex min-h-screen snap-start flex-col justify-center gap-5 px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2 className="font-[Fraunces] text-[clamp(2rem,6vw,4.2rem)] leading-[1.04]">
        Works
      </h2>
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {featuredWorks.map((work) => (
          <article
            key={work.title}
            className="rounded-[1.1rem] border border-black/10 bg-[rgba(var(--cream-rgb),0.9)] p-[1.1rem] shadow-[0_8px_20px_rgba(var(--ink-rgb),0.08)]"
          >
            <h3 className="m-0 font-[Fraunces] text-[clamp(1.25rem,2.8vw,1.9rem)] leading-[1.04]">
              {work.title}
            </h3>
            <p className="mt-[0.65rem] leading-[1.5]">{work.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorksSection;

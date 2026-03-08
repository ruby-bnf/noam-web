type WorkshopsSectionProps = {
  upcomingWorkshops: string[];
};

function WorkshopsSection({ upcomingWorkshops }: WorkshopsSectionProps) {
  return (
    <section
      id="workshops"
      className="flex min-h-screen snap-start flex-col justify-center gap-5 px-[clamp(1.25rem,4vw,5rem)] pt-24 pb-12"
    >
      <h2 className="font-[Fraunces] text-[clamp(2rem,6vw,4.2rem)] leading-[1.04]">
        Workshops
      </h2>
      <ul className="m-0 grid w-full max-w-[680px] list-none gap-3 p-0">
        {upcomingWorkshops.map((workshop) => (
          <li
            key={workshop}
            className="rounded-[0.7rem] border-l-4 border-l-[var(--sea)] bg-[rgba(var(--sea-rgb),0.12)] px-4 py-[0.85rem] font-semibold"
          >
            {workshop}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkshopsSection;

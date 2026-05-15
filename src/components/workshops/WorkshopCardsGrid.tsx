import ContentCard, { type ContentCardProps } from "../ContentCard";

type WorkshopCardsGridProps = {
  workshopCards: ContentCardProps[];
};

function WorkshopCardsGrid({ workshopCards }: WorkshopCardsGridProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(15rem,17rem))] justify-center gap-4">
      {workshopCards.map((card, index) => (
        <ContentCard
          key={card.title}
          title={card.title}
          description={card.description}
          picture={card.picture}
          pictureAlt={card.pictureAlt}
          status={card.status}
          isFeatured={index === 0}
          href="/contact"
        />
      ))}
    </div>
  );
}

export default WorkshopCardsGrid;

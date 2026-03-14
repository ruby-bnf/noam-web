import ContentCard, { type ContentCardProps } from "../ContentCard";

type WorkshopCardsGridProps = {
  workshopCards: ContentCardProps[];
};

function WorkshopCardsGrid({ workshopCards }: WorkshopCardsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {workshopCards.map((card, index) => (
        <ContentCard
          key={card.title}
          title={card.title}
          description={card.description}
          picture={card.picture}
          pictureAlt={card.pictureAlt}
          status={card.status}
          isFeatured={index === 0}
          href="#contact"
        />
      ))}
    </div>
  );
}

export default WorkshopCardsGrid;
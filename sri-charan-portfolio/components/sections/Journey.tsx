import { journey } from "@/data/journey";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";

export function Journey() {
  return (
    <section className="section journey-section" id="journey" aria-labelledby="journey-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="journey-heading"
            eyebrow="Steps, not shortcuts"
            title="My Journey"
            description="A path shaped by curiosity, continued learning, and the decision to start building."
          />
        </Reveal>
        <div className="journey-track">
          <div className="journey-track__line" aria-hidden="true" />
          {journey.map((entry, index) => (
            <Reveal key={entry.marker} className={`journey-entry journey-entry--${index % 2 === 0 ? "left" : "right"}`} delay={index * 60}>
              <div className="journey-entry__marker" aria-hidden="true"><span>{entry.marker}</span></div>
              <article className="journey-card">
                <div className="journey-card__meta">
                  <span className="journey-card__step">STAGE {entry.marker}</span>
                  {entry.year && <span className="journey-card__year"><Icon name="spark" />{entry.year}</span>}
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

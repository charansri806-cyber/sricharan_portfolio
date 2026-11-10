import { initiatives } from "@/data/initiatives";
import { Icon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LeadershipInitiatives() {
  return (
    <section className="section initiatives-section" id="beyond-the-code" aria-labelledby="leadership-initiatives-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="leadership-initiatives-heading"
            eyebrow="Beyond the Code"
            title="Leadership & Initiatives"
            description="A snapshot of the founder-led work, participation, and learning shaping my path."
          />
        </Reveal>
        <div className="initiatives-grid">
          {initiatives.map((initiative, index) => (
            <Reveal key={initiative.id} delay={(index % 4) * 55}>
              <article className={`initiative-card initiative-card--${initiative.accent}`}>
                <div className="initiative-card__top">
                  <span className="initiative-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="initiative-card__icon"><Icon name={initiative.icon} /></span>
                </div>
                <p className="initiative-card__eyebrow">{initiative.eyebrow}</p>
                <h3>{initiative.title}</h3>
                <p className="initiative-card__description">{initiative.description}</p>
                {initiative.href && initiative.linkText && (
                  <a className="initiative-card__link" href={initiative.href} target="_blank" rel="noopener noreferrer">
                    {initiative.linkText}<Icon name="arrow-up-right" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

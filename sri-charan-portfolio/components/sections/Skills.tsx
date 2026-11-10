import { skillGroups } from "@/data/skills";
import { Icon, type IconName } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groupIcons: IconName[] = ["code", "database", "spark", "bulb"];

export function Skills() {
  return (
    <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Learning in motion"
            title="Skills & Areas of Exploration"
            description="A snapshot of what I’m learning and exploring—without pretending a learning journey is a score."
          />
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 55}>
              <article className="skill-card">
                <div className="skill-card__top">
                  <span className={`skill-card__icon skill-card__icon--${index + 1}`}><Icon name={groupIcons[index]} /></span>
                  <span className="skill-card__marker">{group.marker}</span>
                </div>
                <h3>{group.title}</h3>
                <div className="skill-card__tags">
                  {group.items.map((item) => (
                    <span className="skill-tag" key={item.name}>
                      <strong>{item.name}</strong>
                      <span className="skill-tag__status">{item.label}</span>
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="skills-note"><Icon name="spark" />Skills shown reflect the learning and participation shared here.</p>
      </div>
    </section>
  );
}

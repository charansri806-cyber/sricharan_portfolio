import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon, type IconName } from "@/components/ui/Icons";

const explorations: { title: string; description: string; label: string; icon: IconName; tint: string }[] = [
  { title: "Technology", description: "Exploring technologies and developing technical foundations.", label: "Learning", icon: "code", tint: "blue" },
  { title: "Entrepreneurship", description: "Learning how to turn ideas into practical products and opportunities.", label: "Exploring", icon: "bulb", tint: "violet" },
  { title: "NextZen Technos", description: "Continuing to build and evolve my company.", label: "Hands-on", icon: "globe", tint: "cyan" },
  { title: "Future Products", description: "Exploring ideas that can solve meaningful real-world problems.", label: "Exploring", icon: "spark", tint: "pink" },
];

export function BuildingNow() {
  return (
    <section className="section building-section" id="building" aria-labelledby="building-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="building-heading"
            eyebrow="What’s on my mind now"
            title="Currently Building"
            description="I am currently exploring ideas, learning through experimentation, and building toward meaningful technology products and opportunities."
          />
        </Reveal>
        <div className="exploration-grid">
          {explorations.map((item, index) => (
            <Reveal key={item.title} delay={index * 55}>
              <article className={`exploration-card exploration-card--${item.tint}`}>
                <div className="exploration-card__top">
                  <span className="exploration-card__icon"><Icon name={item.icon} /></span>
                  <span className="exploration-card__number">0{index + 1}</span>
                </div>
                <span className="exploration-card__label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="exploration-card__rule" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
        <p className="building-note"><span className="building-note__dot" />Current areas of exploration — not completed projects.</p>
      </div>
    </section>
  );
}

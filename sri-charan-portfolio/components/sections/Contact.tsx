import { site } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <Reveal className="contact-panel">
          <div className="contact-panel__glow contact-panel__glow--one" aria-hidden="true" />
          <div className="contact-panel__glow contact-panel__glow--two" aria-hidden="true" />
          <div className="contact-content">
            <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />Open to meaningful connections</p>
            <h2 id="contact-heading">Let&apos;s Build Something <span className="gradient-ink">Meaningful</span></h2>
            <p>I&apos;m always open to connecting with people interested in technology, entrepreneurship, learning, collaboration, and building meaningful ideas.</p>
            <div className="contact-email-line"><Icon name="mail" /><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="contact-actions">
              <ButtonLink href={`mailto:${site.email}`} icon="mail" iconBefore>Email Me</ButtonLink>
              <ButtonLink href={site.linkedin} variant="secondary" icon="linkedin" iconBefore>LinkedIn</ButtonLink>
              <ButtonLink href={site.github} variant="secondary" icon="github" iconBefore>GitHub</ButtonLink>
            </div>
          </div>
          <div className="contact-side" aria-hidden="true">
            <div className="contact-side__circle contact-side__circle--one" />
            <div className="contact-side__circle contact-side__circle--two" />
            <div className="contact-side__circle contact-side__circle--three" />
            <div className="contact-side__center"><Icon name="arrow-up-right" /></div>
            <span className="contact-side__label contact-side__label--one">Ideas</span>
            <span className="contact-side__label contact-side__label--two">People</span>
            <span className="contact-side__label contact-side__label--three">Possibility</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

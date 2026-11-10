import { site } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";

export function Venture() {
  return (
    <section className="section venture-section" id="nextzen" aria-labelledby="venture-heading">
      <div className="container">
        <Reveal>
          <SectionHeading id="venture-heading" eyebrow="The company I’m building" title="NextZen Technos" />
        </Reveal>
        <Reveal className="venture-panel" delay={80}>
          <div className="venture-panel__visual">
            <div className="venture-panel__light venture-panel__light--one" aria-hidden="true" />
            <div className="venture-panel__light venture-panel__light--two" aria-hidden="true" />
            <div className="venture-logo-frame"><BrandLogo kind="nextzen" priority /></div>
            <p className="venture-panel__visual-caption"><span />A technology-focused company</p>
          </div>
          <div className="venture-panel__content">
            <div className="venture-panel__topline">
              <span className="venture-chip"><Icon name="globe" /> NEXTZEN TECHNOS</span>
              <span className="founded-label">Founded <strong>2026</strong></span>
            </div>
            <h3>Building technology, opportunities, and learning experiences.</h3>
            <p>NextZen Technos is the technology-focused company I am building, with a focus on technology, learning, products, community, and opportunities.</p>
            <div className="venture-actions">
              <ButtonLink href={site.nextzenWebsite}>Visit NextZen Technos</ButtonLink>
              <ButtonLink href={site.nextzenInstagram} variant="secondary" icon="instagram">Follow NextZen Technos</ButtonLink>
            </div>
            <p className="venture-panel__note"><Icon name="spark" />Built around learning, exploration, and possibility.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

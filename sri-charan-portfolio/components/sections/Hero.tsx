import { site } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icons";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid-texture" aria-hidden="true" />
      <div className="hero-glow hero-glow--blue" aria-hidden="true" />
      <div className="hero-glow hero-glow--pink" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="eyebrow__dot" aria-hidden="true" />A founder’s path, in progress</p>
          <div className="founder-badge"><Icon name="spark" />{site.role}</div>
          <h1 id="hero-title">
            Building Ideas.<br />
            <span className="gradient-ink">Exploring Technology.</span><br />
            Creating What&apos;s Next.
          </h1>
          <p className="hero-lede">
            I&apos;m Sri Charan — a founder, builder, and entrepreneur exploring technology, products, and opportunities while building NextZen Technos.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#journey" icon="arrow-down">Explore My Journey</ButtonLink>
            <ButtonLink href="#contact" variant="secondary" icon="arrow-right">Let&apos;s Connect</ButtonLink>
          </div>
          <div className="hero-footnote">
            <span className="hero-footnote__line" aria-hidden="true" />
            <span>Learning, experimenting, building toward what&apos;s next.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Sri Charan founder identity">
          <div className="hero-art__halo hero-art__halo--outer" aria-hidden="true" />
          <div className="hero-art__halo hero-art__halo--inner" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--one" aria-hidden="true" />
          <div className="hero-art__orbit hero-art__orbit--two" aria-hidden="true" />
          <div className="hero-logo-card">
            <span className="hero-logo-card__label">PERSONAL BRAND</span>
            <BrandLogo kind="personal" priority />
            <span className="hero-logo-card__caption">Founder <span>•</span> Builder <span>•</span> Entrepreneur</span>
          </div>
          <div className="hero-note hero-note--top"><span className="hero-note__dot" />Exploring technology</div>
          <div className="hero-note hero-note--bottom"><Icon name="bulb" />Building NextZen Technos</div>
          <div className="hero-art__spark hero-art__spark--one" aria-hidden="true"><Icon name="spark" /></div>
          <div className="hero-art__spark hero-art__spark--two" aria-hidden="true"><Icon name="spark" /></div>
          <div className="hero-art__pill">Ideas in motion <span aria-hidden="true">↗</span></div>
        </div>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll to About Me"><span />Scroll to explore</a>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icons";

export function Vision() {
  return (
    <section className="vision-section" id="vision" aria-labelledby="vision-heading">
      <div className="vision-grid" aria-hidden="true" />
      <div className="vision-orb vision-orb--one" aria-hidden="true" />
      <div className="vision-orb vision-orb--two" aria-hidden="true" />
      <div className="container vision-layout">
        <Reveal className="vision-content">
          <p className="eyebrow"><span className="eyebrow__dot" aria-hidden="true" />The long view</p>
          <h2 id="vision-heading">Founder <span className="gradient-ink">Vision</span></h2>
          <p className="vision-statement">Building meaningful technology, creating opportunities, and growing products that solve real problems.</p>
          <p className="vision-description">
            My long-term ambition is to build meaningful technology products and companies that solve real problems and create opportunities for people to learn, build, and grow. I want to continue developing as both a technology builder and entrepreneur and eventually build products with meaningful real-world impact.
          </p>
          <a className="vision-link" href="#contact">Let&apos;s make meaningful things possible <Icon name="arrow-up-right" /></a>
        </Reveal>
        <div className="vision-orbit" aria-hidden="true">
          <div className="vision-orbit__ring vision-orbit__ring--outer" />
          <div className="vision-orbit__ring vision-orbit__ring--middle" />
          <div className="vision-orbit__ring vision-orbit__ring--inner" />
          <div className="vision-orbit__core"><Icon name="spark" /></div>
          <span className="vision-orbit__dot vision-orbit__dot--one" />
          <span className="vision-orbit__dot vision-orbit__dot--two" />
          <span className="vision-orbit__dot vision-orbit__dot--three" />
        </div>
      </div>
    </section>
  );
}

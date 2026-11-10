import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";

const focusAreas = ["Technology", "Entrepreneurship", "Continuous learning"];

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-layout">
        <Reveal className="about-intro">
          <SectionHeading eyebrow="A little about me" title="About Me" id="about-heading" />
          <p className="about-lede">
            I am Sri Charan, a student and founder building in the technology and entrepreneurship space. I started exploring technology and entrepreneurship with an interest in creating practical solutions, products, and opportunities for others. I am currently building NextZen Technos while continuing to learn, experiment, and develop as a founder and technology builder.
          </p>
          <a className="inline-link" href="#journey">A little more about my journey <Icon name="arrow-right" /></a>
        </Reveal>
        <Reveal className="about-aside" delay={100}>
          <div className="about-note-card">
            <div className="about-note-card__icon"><Icon name="spark" /></div>
            <p className="about-note-card__eyebrow">WHERE I&apos;M FOCUSED</p>
            <h3>Learning by exploring. Building with intention.</h3>
            <p>Technology, entrepreneurship, and the possibilities that open when ideas meet thoughtful effort.</p>
            <div className="about-focus-list">
              {focusAreas.map((area) => <span key={area}><Icon name="check" />{area}</span>)}
            </div>
          </div>
          <div className="about-aside-orb" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}

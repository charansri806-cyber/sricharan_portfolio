import { primaryNavigation, site } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-orb footer-orb--one" aria-hidden="true" />
      <div className="footer-orb footer-orb--two" aria-hidden="true" />
      <div className="container footer-main">
        <div className="footer-identity">
          <a className="footer-personal-logo" href="#top" aria-label="Sri Charan — back to top">
            <BrandLogo kind="personal" />
          </a>
          <p className="footer-name">Sri Charan</p>
          <p className="footer-role">Founder <span>•</span> Builder <span>•</span> Entrepreneur</p>
          <a className="footer-email" href={`mailto:${site.email}`}><Icon name="mail" />{site.email}</a>
        </div>

        <div className="footer-navigation">
          <p className="footer-label">Explore</p>
          <nav aria-label="Footer navigation">
            {primaryNavigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>

        <div className="footer-social">
          <p className="footer-label">Find me around</p>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn<Icon className="footer-external" name="arrow-up-right" /></a>
          <a href={site.github} target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub<Icon className="footer-external" name="arrow-up-right" /></a>
          <a href={`mailto:${site.email}`}><Icon name="mail" />Email<Icon className="footer-external" name="arrow-up-right" /></a>
        </div>

        <div className="footer-venture">
          <p className="footer-label">Building with</p>
          <a href={site.nextzenWebsite} target="_blank" rel="noopener noreferrer" aria-label="Visit NextZen Technos website">
            <BrandLogo kind="nextzen" />
            <span>NextZen Technos <Icon name="arrow-up-right" /></span>
          </a>
          <a className="footer-instagram" href={site.nextzenInstagram} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" />Follow on Instagram
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 Sri Charan. All rights reserved.</p>
        <a href="#top">Back to top <Icon name="arrow-up" /></a>
      </div>
    </footer>
  );
}

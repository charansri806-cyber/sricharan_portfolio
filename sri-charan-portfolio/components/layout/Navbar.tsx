"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { primaryNavigation, site } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icons";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#about");

  useEffect(() => {
    const sections = primaryNavigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="nav-shell">
        <a className="nav-brand" href="#top" aria-label="Sri Charan — back to top" onClick={closeMenu}>
          <BrandLogo kind="personal" />
          <span className="nav-brand__name">Sri Charan</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <a
              key={item.href}
              className={`nav-link${activeHref === item.href ? " is-active" : ""}`}
              href={item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">Let&apos;s Connect <Icon name="arrow-up-right" /></a>
        </nav>
        <button
          type="button"
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span /><span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        hidden={!menuOpen}
      >
        {primaryNavigation.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className={`mobile-nav__link${activeHref === item.href ? " is-active" : ""}`}
            onClick={closeMenu}
            style={{ "--nav-index": index } as CSSProperties}
          >
            <span>{item.label}</span><Icon name="arrow-up-right" />
          </a>
        ))}
        <a className="mobile-nav__cta" href="#contact" onClick={closeMenu}>Let&apos;s Connect</a>
        <p className="mobile-nav__signature">{site.role}</p>
      </nav>
    </header>
  );
}

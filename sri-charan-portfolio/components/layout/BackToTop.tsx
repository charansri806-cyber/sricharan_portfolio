"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 620);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <a
      className={`back-to-top${visible ? " is-visible" : ""}`}
      href="#top"
      aria-label="Scroll back to the top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <Icon name="arrow-up" />
    </a>
  );
}

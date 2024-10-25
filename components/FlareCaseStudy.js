import { useCallback } from "react";
import "./FlareCaseStudy.css";

const FlareCaseStudy = ({ className = "" }) => {
  const onProblemTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='problemContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResearchTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='researchContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoalTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='goalContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPersonasTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='personasContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFinalUITextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='uI']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`flare-case-study ${className}`}>
      <div className="flare-case-study-child" />
      <h2 className="flare1">FLARE</h2>
      <b className="e-commerce-mobile-app">E-commerce Mobile App</b>
      <img
        className="flare-2-icon"
        loading="lazy"
        alt=""
        src="/flare-1@2x.png"
      />
      
        
    </section>
  );
};


export default FlareCaseStudy;

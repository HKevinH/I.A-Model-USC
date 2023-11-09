import React from "react";
import { useInView } from "react-intersection-observer";
import "./section.css";
const Section = ({ title, content }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="container-section">
      <section ref={ref} className={`section ${inView ? "appear" : ""}`}>
        <h2>{title}</h2>
        {content}
      </section>
    </div>
  );
};

export default Section;

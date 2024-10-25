import "./CaseStudy.css";

const CaseStudy = ({ className = "" }) => {
  return (
    <section className={`case-study ${className}`}>
      <div className="case-study-child" />
      <h2 className="smart-health">{`Smart Health `}</h2>
      <b className="electronic-health-records">Electronic Health Records</b>
      <img
        className="rectangle-2-2"
        loading="lazy"
        alt=""
        src="/rectangle-2-2@2x.png"
      />
     
    </section>
  );
};

export default CaseStudy;

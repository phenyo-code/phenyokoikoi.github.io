import Visuals from "./Visuals";
import "./CaseStudy1.css";

const CaseStudy1 = ({ className = "" }) => {
  return (
    <section className={`case-study1 ${className}`}>
      <div className="case-study-item" />
      <div className="structure1">
        
      </div>
      <Visuals
        visualsWidth="1002px"
        elementsJustifyContent="flex-start"
        elementsPadding="unset"
        elementsHeight="158px"
        uniEats="Finora"
        foodDeliveryApp={`Finance & Banking App`}
        uniEats2="/rectangle-3-2@2x.png"
        uniEats2IconWidth="465px"
      />
    </section>
  );
};

export default CaseStudy1;

import FlareCaseStudy from "../components/FlareCaseStudy";
import MainContent from "../components/MainContent";
import UI from "../components/UI";
import FrameComponent1 from "../components/FrameComponent1";
import "./CaseStudyFLARE.css";

const CaseStudyFLARE = () => {
  return (
    <div className="case-study-flare">
      <FlareCaseStudy />
      <section className="main-content-wrapper">
        <MainContent />
      </section>
      <div className="case-study-flare-child" />
      <UI />
      <FrameComponent1 />
    </div>
  );
};

export default CaseStudyFLARE;

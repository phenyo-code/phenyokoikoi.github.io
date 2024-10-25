import RegistrationProblem from "../components/RegistrationProblem";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import "./CaseStudyNWU.css";

const CaseStudyNWU = () => {
  return (
    <div className="case-study-nwu">
      <div className="structure">
        <b className="overview">Overview</b>
        <div className="tools-parent">
          <b className="tools">Tools</b>
          <div className="figma">Figma</div>
        </div>
      </div>
      <img
        className="shape-icon"
        loading="lazy"
        alt=""
        src="/placeholder1@2x.png"
      />
      <RegistrationProblem />
      <section className="proof-of-registration">
        <img
          className="registeryear-2-icon"
          alt=""
          src="/registeryear-1@2x.png"
        />
        <div className="confirmation-image">
          <img
            className="confirmmodules-1-icon"
            alt=""
            src="/confirmmodules-1@2x.png"
          />
        </div>
        <img
          className="proofofregis-1-icon"
          loading="lazy"
          alt=""
          src="/proofofregis-1@2x.png"
        />
      </section>
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
    </div>
  );
};

export default CaseStudyNWU;

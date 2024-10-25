import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`research-content-parent ${className}`}>
      <div className="research-content2">
        <div className="research-visuals">
          <img
            className="product-draw-1"
            loading="lazy"
            alt=""
            src="/product-draw-1@2x.png"
          />
          <div className="research-heading">
            <b className="user-research6">User Research</b>
          </div>
        </div>
        <div className="product-wireframe-1-parent">
          <img
            className="product-wireframe-1-icon"
            loading="lazy"
            alt=""
            src="/product-wireframe-1@2x.png"
          />
          <img
            className="product-wireframe-1-icon"
            loading="lazy"
            alt=""
            src="/product-1@2x.png"
          />
        </div>
      </div>
      <div className="research-description">
        <div className="we-conducted-surveys-container">
          <p className="we-conducted-surveys">
            We conducted surveys and interviews with students, faculty, and
            cafeteria staff to gather
          </p>
          <p className="we-conducted-surveys">{`insights on their pain points and preferences. The research uncovered the following `}</p>
          <p className="we-conducted-surveys">key insights:</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

import PropTypes from "prop-types";
import "./FrameComponent15.css";

const FrameComponent15 = ({ className = "" }) => {
  return (
    <section className={`user-flow-wrapper ${className}`}>
      <div className="user-flow1">
        <div className="user-flow-content">
          <div className="user-flow-details">
            <b className="user-flow2">User Flow.</b>
            <div className="flowchart-visual">
              <img
                className="finorauserflow-1-icon"
                loading="lazy"
                alt=""
                src="/finorauserflow-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="designs-wrapper">
          <b className="designs1">Designs</b>
        </div>
        <img
          className="finorra-1-icon"
          loading="lazy"
          alt=""
          src="/finorra-1@2x.png"
        />
        <div className="u-i-design">
          <div className="u-i-design-details">
            <img
              className="finorahome-1-icon"
              loading="lazy"
              alt=""
              src="/finorahome-1@2x.png"
            />
            <img
              className="finorahome-1-icon"
              loading="lazy"
              alt=""
              src="/cards-1finora-1@2x.png"
            />
            <img
              className="finorahome-1-icon"
              loading="lazy"
              alt=""
              src="/transactfinora-1@2x.png"
            />
            <img
              className="finorahome-1-icon"
              loading="lazy"
              alt=""
              src="/virtualcardfinora-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent15.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent15;

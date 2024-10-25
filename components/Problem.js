import PropTypes from "prop-types";
import "./Problem.css";

const Problem = ({ className = "" }) => {
  return (
    <section className={`problem7 ${className}`}>
      <div className="problem-statement-container">
        <b className="problem-statement4">Problem Statement</b>
      </div>
      <div className="problem-description-container">
        <div className="problem-description-layout">
          <div className="the-current-process-container">
            <p className="the-current-process">{`The current process for securing university accommodation is often inefficient, requiring `}</p>
            <p className="the-current-process">{`students to physically visit the university or rely on informal networks like Facebook to find `}</p>
            <p className="the-current-process">{`housing. This leads to long waiting times, uncertainty in the quality of accommodation, and `}</p>
            <p className="the-current-process">
              the potential for scams or miscommunication with landlords.
            </p>
            <p className="the-current-process">&nbsp;</p>
            <p className="the-current-process">{`The goal of Roomify was to solve these problems by offering a centralized, secure platform `}</p>
            <p className="the-current-process">{`where students can view, compare, and book university-approved residences online. The `}</p>
            <p className="the-current-process">{`platform needed to be user-friendly and provide detailed information about accommodations, `}</p>
            <p className="the-current-process">
              including availability, pricing, and amenities.
            </p>
          </div>
        </div>
        <div className="problem-visuals">
          <img
            className="roomify-room-wireframe-1-icon"
            alt=""
            src="/Wireframe.png"
          />
          <img
            className="roomify-room-lo-fi-1-icon"
            alt=""
            src="/Roomify.png"
          />
          <img
            className="roomify-room-1-icon"
            loading="lazy"
            alt=""
            src="/Roomify_Room.png"
          />
        </div>
      </div>
    </section>
  );
};

Problem.propTypes = {
  className: PropTypes.string,
};

export default Problem;

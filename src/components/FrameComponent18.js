import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent18.css";

const FrameComponent18 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/case-study-smart-health");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/case-study-finora");
  }, [navigate]);

  return (
    <div className={`smart-health-wrapper ${className}`}>
      <div className="smart-health1">
        <div className="smart-health-banking">
          <div className="rectangle-parent2" onClick={onGroupContainerClick}>
            <div className="frame-child2" />
            <img
              className="health-image-icon"
              loading="lazy"
              alt=""
              src="/rectangle-2-1@2x.png"
            />
          </div>
          <div className="roomify-content">
            <div className="uni-eats-name">
              <div className="smart-heatlth">Smart Heatlth</div>
              <div className="electronic-health-records-container">
                <ul className="electronic-health-records1">
                  <li>Electronic Health Records</li>
                </ul>
              </div>
            </div>
            <div className="mobile-app-uiux2">Mobile App, UI/UX Design</div>
          </div>
        </div>
        <div className="smart-health-banking">
          <div className="rectangle-parent3" onClick={onGroupContainerClick1}>
            <div className="frame-child3" />
            <img
              className="rectangle-3-1"
              loading="lazy"
              alt=""
              src="/rectangle-3-1@2x.png"
            />
          </div>
          <div className="uni-eats-details">
            <div className="finora-parent">
              <div className="smart-heatlth">Finora</div>
              <div className="banking">
                <ul className="electronic-health-records1">
                  <li>Banking</li>
                </ul>
              </div>
            </div>
            <div className="mobile-app-uiux3">Mobile App, UI/UX Design</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent18.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent18;

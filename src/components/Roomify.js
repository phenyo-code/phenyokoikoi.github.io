import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HealthDetails.css";

const HealthDetails = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/case-study-roomify");
  }, [navigate]);

  return (
    <div className={`health-details ${className}`}>
      <div className="roomify-details">
        <div className="roomify-parent" onClick={onGroupContainerClick}>
          <div className="roomify">{`Roomify `}</div>
          <div className="accommodation-wrapper">
            <div className="accommodation">
              <ul className="accommodation1">
                <li>Accommodation</li>
              </ul>
            </div>
          </div>
          <div className="frame-parent10">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <img
                className="roomify-1-icon"
                loading="lazy"
                alt=""
                src="/roomify-1@2x.png"
              />
            </div>
            <img
              className="placeholder-icon1"
              alt=""
              src="/placeholder@2x.png"
            />
          </div>
        </div>
        <div className="flare-name">
          <div className="group-div" onClick={onGroupContainerClick}>
            <div className="frame-child1" />
            <img
              className="flare-1-icon"
              loading="lazy"
              alt=""
              src="/flare-1@2x.png"
            />
          </div>
          <div className="flare-ecommerce">
            <div className="accommodation">FLARE</div>
            <div className="e-commerce">
              <ul className="accommodation1">
                <li>E-commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flare-item-wrapper">
        <div className="flare-item">
          <div className="responsive-web-app1">
            Responsive Web App, UI/UX Design
          </div>
          <div className="mobile-app-uiux1">Mobile App, UI/UX Design</div>
        </div>
      </div>
    </div>
  );
};

HealthDetails.propTypes = {
  className: PropTypes.string,
};

export default HealthDetails;

import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Visuals.css";

const Visuals = ({
  className = "",
  visualsWidth,
  elementsJustifyContent,
  elementsPadding,
  elementsHeight,
  uniEats,
  foodDeliveryApp,
  uniEats2,
  uniEats2IconWidth,
}) => {
  const visualsStyle = useMemo(() => {
    return {
      width: visualsWidth,
    };
  }, [visualsWidth]);

  const elementsStyle = useMemo(() => {
    return {
      justifyContent: elementsJustifyContent,
      padding: elementsPadding,
      height: elementsHeight,
    };
  }, [elementsJustifyContent, elementsPadding, elementsHeight]);

  const uniEats2IconStyle = useMemo(() => {
    return {
      width: uniEats2IconWidth,
    };
  }, [uniEats2IconWidth]);

  return (
    <div className={`visuals ${className}`} style={visualsStyle}>
      <div className="elements" style={elementsStyle}>
        <div className="branding">
          <h2 className="unieats1">{uniEats}</h2>
          <div className="description">
            <b className="food-delivery-app1">{foodDeliveryApp}</b>
          </div>
        </div>
      </div>
      <img
        className="unieats-2-icon"
        loading="lazy"
        alt=""
        src={uniEats2}
        style={uniEats2IconStyle}
      />
    </div>
  );
};

Visuals.propTypes = {
  className: PropTypes.string,
  uniEats: PropTypes.string,
  foodDeliveryApp: PropTypes.string,
  uniEats2: PropTypes.string,

  /** Style props */
  visualsWidth: PropTypes.string,
  elementsJustifyContent: PropTypes.string,
  elementsPadding: PropTypes.string,
  elementsHeight: PropTypes.string,
  uniEats2IconWidth: PropTypes.string,
};

export default Visuals;

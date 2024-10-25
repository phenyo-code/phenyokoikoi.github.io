import Visuals from "./Visuals";
import PropTypes from "prop-types";
import "./Project.css";

const Project = ({ className = "" }) => {
  return (
    <section className={`project ${className}`}>
      <div className="project-child" />
      
        
      <Visuals
        uniEats="UniEats"
        foodDeliveryApp="Food Delivery App"
        uniEats2="/unieats-1@2x.png"
      />
    </section>
  );
};

Project.propTypes = {
  className: PropTypes.string,
};

export default Project;

import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  const onProblemTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='problem']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResearchTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='researchRoomContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoalTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='goalRoomContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDesignsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='designsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFinalUITextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='finalUIRoomContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onResultsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='resultsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNextStepsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='nextStepsRoomifyContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={`container1 ${className}`}>
      <div className="layout">
        <img
          className="shape-icon1"
          loading="lazy"
          alt=""
          src="/roomify_desk.png"
        />
        <div className="rectangle-parent6">
          <div className="frame-child8" />
          <h2 className="roomify1">Roomify</h2>
          <div className="details2">
            <div className="details-child" />
            <b className="com">.com</b>
          </div>
          <b className="student-accommodation-platform">
            Student accommodation platform
          </b>

          <img className="roomify-2-icon" 
          alt="" 
          src="/roomify-1@2x.png"/>

       
            
            </div>
          </div>
        
   

    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;

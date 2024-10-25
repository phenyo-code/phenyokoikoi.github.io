import "./FrameComponent13.css";

const FrameComponent13 = ({ className = "" }) => {
  return (
    <section className={`prototype-content-parent ${className}`}>
      <div className="prototype-content">
        <img
          className="prototype-content-child"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className="prototype-mockups">
          <img
            className="rectangle1-2-icon"
            alt=""
            src="/rectangle1-1@2x.png"
          />
          <div className="mockup-pair-parent">
            <img
              className="mockup-pair-icon"
              alt=""
              src="/mockup-pair@2x.png"
            />
            <img
              className="mockup-pair-icon1"
              alt=""
              src="/mockup-pair1@2x.png"
            />
          </div>
          <img className="rectangle-3-3" alt="" src="/rectangle-3-3@2x.png" />
          <img className="rectangle-4-1" alt="" src="/rectangle-4-1@2x.png" />
          <img
            className="rectangle-5-1"
            loading="lazy"
            alt=""
            src="/rectangle-5-1@2x.png"
          />
        </div>
      </div>
      <div className="view-prototype1">
        <div className="view-prototype-child" />
        <h3 className="view-prototype2">VIEW PROTOTYPE</h3>
      </div>
    </section>
  );
};

export default FrameComponent13;

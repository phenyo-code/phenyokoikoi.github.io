import "./FrameComponent16.css";

const FrameComponent16 = ({ className = "" }) => {
  return (
    <section className={`final-content-parent ${className}`}>
      <div className="final-content">
        <b className="final-ui3">Final UI</b>
        <div className="final-u-i-design">
          <img
            className="finorahomme-1-icon"
            alt=""
            src="/finorahomme-1@2x.png"
          />
          <img className="cardss-1-icon" alt="" src="/cardss-1@2x.png" />
          <img
            className="virtualcarddd-1-icon"
            loading="lazy"
            alt=""
            src="/virtualcarddd-1@2x.png"
          />
          <img
            className="moneyoutin-1-icon"
            alt=""
            src="/moneyoutin-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent16;

import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <section className={`prototype-link-parent ${className}`}>
      <div className="prototype-link">
        <img
          className="paywithcard-2-icon"
          alt=""
          src="/paywithcard-1@2x.png"
        />
        <img
          className="receiptnwu-2-icon"
          loading="lazy"
          alt=""
          src="/receiptnwu-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent10;

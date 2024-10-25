import "./UI.css";

const UI = ({ className = "" }) => {
  return (
    <section className={`ui ${className}`}>
      <div className="u-i-designs">
        <b className="designs4">Designs</b>
      </div>
      <div className="design-previews">
        <img className="preview-set-icon" alt="" src="/rectangle-6-1@2x.png" />
        <img
          className="preview-set-icon1"
          loading="lazy"
          alt=""
          src="/rectangle-9-1@2x.png"
        />
        <img className="preview-set-icon2" alt="" src="/preview-set@2x.png" />
        <img className="preview-set-icon3" alt="" src="/preview-set1@2x.png" />
        <img className="preview-set-icon4" alt="" src="/preview-set2@2x.png" />
        <img className="preview-set-icon5" alt="" src="/preview-set3@2x.png" />
      </div>
    </section>
  );
};

export default UI;

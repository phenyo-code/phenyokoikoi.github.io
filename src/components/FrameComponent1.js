import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`prototype-content-wrapper ${className}`}>
     
        <div className="next-steps-parent">
          <b className="next-steps3">Next Steps</b>
          <footer className="the-app-is-container">
            <p className="the-app-is">
              1.) The app is still under development and will be launched in
              June 2025
            </p>
            <p className="the-app-is">
              2.) Introduce accessories, footwear, and jewelry from local brands
              to diversify the offerings.
            </p>
          </footer>
        </div>
      
    </section>
  );
};

export default FrameComponent1;

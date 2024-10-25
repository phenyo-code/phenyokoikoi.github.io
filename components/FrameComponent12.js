import "./FrameComponent12.css";

const FrameComponent12 = ({ className = "" }) => {
  return (
    <section className={`final-u-i-content-wrapper ${className}`}>
      <div className="final-u-i-content">
        <div className="final-u-i-details">
          <div className="final-u-i-images-parent">
            <div className="final-u-i-images">
              <div className="a-b-testing">
                <div className="options">
                  <h3 className="a">A</h3>
                  <h3 className="a">B</h3>
                </div>
              </div>
              <div className="problem-solution">
                <div className="problem-healthcare-providers-container">
                  <p className="implement-a-speech-to-text">Problem:</p>
                  <ul className="healthcare-providers-will-have">
                    <li className="healthcare-providers-will">{`Healthcare providers will have to manually input patient information into the system during `}</li>
                  </ul>
                  <p className="consultations"> consultations.</p>
                  <ul className="healthcare-providers-will-have">
                    <li className="healthcare-providers-will">{`This manual entry was seen as cumbersome and time-consuming, especially for `}</li>
                  </ul>
                  <p className="consultations">
                    {" "}
                    doctors managing multiple patients in a day.
                  </p>
                  <ul className="healthcare-providers-will-have">
                    <li className="healthcare-providers-will">{`Many users expressed a desire for a more hands-free approach to data entry, as it `}</li>
                  </ul>
                  <p className="consultations">
                    {" "}
                    would allow them to focus more on the patient rather than
                    the screen.
                  </p>
                </div>
                <div className="goal-implement-a-container">
                  <p className="implement-a-speech-to-text">Goal:</p>
                  <p className="implement-a-speech-to-text">&nbsp;</p>
                  <p className="implement-a-speech-to-text">{`Implement a speech-to-text feature to streamline data entry and improve the user `}</p>
                  <p className="implement-a-speech-to-text">
                    experience for healthcare professionals by reducing manual
                    data input.
                  </p>
                </div>
              </div>
            </div>
            <b className="final-ui1">Final UI</b>
          </div>
        </div>
        <img
          className="imockup-iphone-13-2"
          alt=""
          src="/imockup--iphone-13-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent12;

import PropTypes from "prop-types";
import "./RegistrationProblem.css";

const RegistrationProblem = ({ className = "" }) => {
  return (
    <section className={`registration-problem ${className}`}>
      <div className="role4">Role</div>
      <div className="research-uiux4">{`Research & UI/UX `}</div>
      <div className="timeline4">Timeline</div>
      <div className="june-july">June - July 2022</div>
      <div className="north-west-university-struggle-container">
        <p className="north-west-university-struggle">{`North-West University struggles with enforcing prerequisite requirements `}</p>
        <p className="north-west-university-struggle">{`during module registration, which can result in students registering for `}</p>
        <p className="north-west-university-struggle">{`modules they are not yet qualified to take. This leads to academic issues, `}</p>
        <p className="north-west-university-struggle">{`course failures, and administrative headaches. `}</p>
        <p className="north-west-university-struggle">&nbsp;</p>
        <p className="north-west-university-struggle">{`The NWU Registration System `}</p>
        <p className="north-west-university-struggle">{`is a web app designed to automate the registration process, ensuring `}</p>
        <p className="north-west-university-struggle">{`students only enroll in modules for which they meet all prerequisites. `}</p>
        <p className="north-west-university-struggle">&nbsp;</p>
        <p className="north-west-university-struggle">{`By integrating an intelligent system that checks academic history in real time, `}</p>
        <p className="north-west-university-struggle">{`the platform enhances efficiency, reduces manual errors, and provides `}</p>
        <p className="north-west-university-struggle">
          students with a seamless registration experience.
        </p>
      </div>
      <div className="registration-problem-inner">
        <div className="user-research-parent">
          <div className="user-research2">
            <b className="user-research3">User Research</b>
            <img
              className="registeryear-1-icon"
              alt=""
              src="/registeryear-1@2x.png"
            />
            <img
              className="paywithcard-1-icon"
              alt=""
              src="/paywithcard-1@2x.png"
            />
          </div>
          <div className="receipt-image">
            <img
              className="receiptnwu-1-icon"
              loading="lazy"
              alt=""
              src="/receiptnwu-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

RegistrationProblem.propTypes = {
  className: PropTypes.string,
};

export default RegistrationProblem;

import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="student-needs-parent">
        <div className="student-needs">
          <div className="student-needs-heading">
            <div className="to-build-a-container">
              <p className="to-build-a">{`To build a system that truly addresses student needs and improves the registration `}</p>
              <p className="to-build-a">
                experience, we conducted surveys and interviews with both
                students and academic advisors.
              </p>
            </div>
            <div className="key-insights-75-container">
              <p className="to-build-a">Key Insights:</p>
              <p className="to-build-a">&nbsp;</p>
              <ul className="of-students-found-the-current">
                <li className="of-students-found">{`75% of students found the current registration system confusing, especially when trying to `}</li>
              </ul>
              <p className="verify-prerequisites"> verify prerequisites.</p>
              <ul className="of-students-found-the-current">
                <li className="of-students-found">{`60% of academic staff said they spend too much time correcting registration errors, mainly `}</li>
              </ul>
              <p className="verify-prerequisites">
                {" "}
                due to students enrolling in incorrect modules.
              </p>
              <ul className="of-students-found-the-current">
                <li className="of-students-found">{`85% of students indicated they would appreciate automated suggestions for modules based `}</li>
              </ul>
              <p className="verify-prerequisites">
                {" "}
                on their academic progress.
              </p>
            </div>
          </div>
          <div className="user-personas1">User Personas</div>
          <div className="persona-1-lebo-container">
            <p className="to-build-a">
              Persona 1: Lebo (Undergraduate Student)
            </p>
            <p className="to-build-a">&nbsp;</p>
            <ul className="of-students-found-the-current">
              <li className="of-students-found">Age: 20</li>
              <li className="of-students-found">Course: Information Systems</li>
              <li className="of-students-found">{`Pain Points: Lebo often finds the registration process stressful and confusing, especially `}</li>
            </ul>
            <p className="verify-prerequisites">
              {" "}
              trying to figure out which modules she is eligible to take.
            </p>
            <ul className="of-students-found-the-current">
              <li className="of-students-found">{`Goals: Wants a simple system that suggests the right modules and prevents her from `}</li>
            </ul>
            <p className="verify-prerequisites">
              {" "}
              mistakenly registering for courses without meeting the
              prerequisites.
            </p>
          </div>
        </div>
        <div className="persona-2-prof-container">
          <p className="to-build-a">
            Persona 2: Prof. Gorejena (Faculty Manager)
          </p>
          <ul className="of-students-found-the-current">
            <li className="of-students-found">Age: 45</li>
            <li className="of-students-found">
              Role: Head of Department(Information System)
            </li>
            <li className="of-students-found">{`Pain Points: Prof. Gorejena spends too much time helping students fix registration mistakes `}</li>
          </ul>
          <p className="verify-prerequisites">
            {" "}
            caused by missing prerequisites.
          </p>
          <ul className="of-students-found-the-current">
            <li className="of-students-found">{`Goals: Needs a system that ensures students only register for eligible courses, so they are `}</li>
          </ul>
          <p className="verify-prerequisites">
            {" "}
            properly prepared and follow the correct academic path.
          </p>
        </div>
      </div>
      <div className="usability-testing-heading">
        <b className="user-flow3">User Flow</b>
        <div className="user-flow4">
          <img
            className="nwu-userflow-1-icon"
            loading="lazy"
            alt=""
            src="/nwu-userflow-1@2x.png"
          />
        </div>
        <b className="usability-testing">Usability Testing</b>
      </div>
      <div className="feedback-heading">
        <div className="after-developing-a-prototype-parent">
          <div className="to-build-a-container">
            <p className="to-build-a">{`After developing a prototype, we conducted usability tests with 15 students. The goal was to `}</p>
            <p className="to-build-a">
              evaluate the user experience and pinpoint areas that needed
              improvement.
            </p>
          </div>
          <div className="key-insights-75-container">
            <p className="to-build-a">Feedback and Adjustments:</p>
            <p className="to-build-a">&nbsp;</p>
            <ul className="of-students-found-the-current">
              <li className="of-students-found">{`Student Feedback: Students wanted clearer guidance on what to do if they didn’t meet the `}</li>
            </ul>
            <p className="verify-prerequisites"> prerequisites for a module.</p>
            <p className="to-build-a">&nbsp;</p>
            <ul className="of-students-found-the-current">
              <li className="of-students-found">
                Adjustment: We added a feature that disables a module that a
                student does not qualify to
              </li>
            </ul>
            <p className="verify-prerequisites"> register for.</p>
          </div>
        </div>
      </div>
      <b className="designs2">Designs</b>
    </section>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;

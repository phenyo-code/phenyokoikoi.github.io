import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`research-layout-wrapper ${className}`}>
      <div className="research-layout">
        <div className="researchroom">
          <b className="user-research5">User Research</b>
        </div>
        <div className="research-insights-container">
          <div className="research-insights-layout">
            <div className="to-understand-the-container2">
              <p className="current-university-students">{`To understand the specific needs of students, we conducted surveys and interviews with `}</p>
              <p className="current-university-students">{`current university students who have gone through the process of securing accommodation. `}</p>
              <p className="current-university-students">
                We also engaged with university residence administrators and
                off-campus landlords
              </p>
            </div>
            <div className="key-insights-container">
              <div className="key-insights-from-container">
                <p className="current-university-students">
                  Key insights from research:
                </p>
                <ul className="long-waiting-times-all-studen">
                  <li className="long-waiting-times">
                    Long Waiting Times: All students complained about the long
                    lines and delays when applying
                  </li>
                </ul>
                <p className="for-on-campus-housing">
                  {" "}
                  for on-campus housing in person.
                </p>
                <ul className="long-waiting-times-all-studen">
                  <li className="long-waiting-times">{`Lack of Verified Listings: Using platforms like Facebook often resulted in unverified and `}</li>
                </ul>
                <p className="for-on-campus-housing">
                  {" "}
                  unreliable listings, leading to unsafe or unsuitable living
                  conditions.
                </p>
                <ul className="long-waiting-times-all-studen">
                  <li className="long-waiting-times">{`Inaccessible for Remote Students: International and out-of-town students struggled to `}</li>
                </ul>
                <p className="for-on-campus-housing">{`      secure accommodation without traveling to the university city ahead of time, causing `}</p>
                <p className="for-on-campus-housing">
                  {" "}
                  logistical and financial challenges.
                </p>
              </div>
            </div>
          </div>
          <div className="goalroom">
            <b className="user-research5">Goal Statement</b>
            <div className="easy-booking-process-container">
              <p className="current-university-students">{`Easy Booking Process: Create a streamlined process for students to search for, compare, and `}</p>
              <p className="current-university-students">
                book accommodations online.
              </p>
              <p className="current-university-students">&nbsp;</p>
              <p className="current-university-students">{`Verified Listings: Ensure that all listed accommodations are verified by the university or `}</p>
              <p className="current-university-students">official landlords.</p>
              <p className="current-university-students">&nbsp;</p>
              <p className="current-university-students">{`Transparency: Provide detailed information about residence options, including pricing, `}</p>
              <p className="current-university-students">
                availability, amenities, and reviews from other students.
              </p>
              <p className="current-university-students">&nbsp;</p>
              <p className="current-university-students">
                Secure Transactions: Implement a secure payment gateway for
                booking accommodations,
              </p>
              <p className="current-university-students">
                ensuring student data and payments are protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

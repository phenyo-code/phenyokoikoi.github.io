import PropTypes from "prop-types";
import "./ProblemAndGoal.css";

const ProblemAndGoal = ({ className = "" }) => {
  return (
    <section className={`problem-and-goal ${className}`}>
      <div className="problem3">
        <div className="problem-details1">
          <b className="goal-statement">Problem Statement</b>
          <div className="as-financial-services-container">
            <p className="as-financial-services">{`As financial services become more digital, users in urban areas demand seamless, fast, and `}</p>
            <p className="as-financial-services">{`secure digital banking experiences. Traditional banking apps often lack integration with `}</p>
            <p className="as-financial-services">{`modern payment systems and do not provide personalized tools to manage finances effectively. `}</p>
            <p className="as-financial-services">
              VirtualBank was created to address these pain points.
            </p>
          </div>
        </div>
        <div className="goal3">
          <b className="goal-statement">Goal Statement</b>
          <div className="goal-details">
            <div className="finora-aims-to-container">
              <p className="as-financial-services">
                Finora aims to provide users with an all-in-one banking platform
                that includes:
              </p>
              <ul className="integration-with-apple-pay-and">
                <li className="integration-with-apple">
                  Integration with Apple Pay and Samsung Pay for seamless,
                  contactless payments.
                </li>
                <li className="integration-with-apple">
                  Personalized budgeting tools to help users track their
                  spending and save toward financial goals.
                </li>
                <li className="integration-with-apple">{`An intuitive and secure interface for managing everyday banking tasks such as transfers, savings, `}</li>
              </ul>
              <p className="and-bill-payments"> and bill payments.</p>
              <ul className="instant-notifications-and-deta">
                <li>
                  Instant notifications and detailed spending analytics for
                  better financial oversight.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ProblemAndGoal.propTypes = {
  className: PropTypes.string,
};

export default ProblemAndGoal;

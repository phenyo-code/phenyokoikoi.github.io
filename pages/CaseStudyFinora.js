import CaseStudy1 from "../components/CaseStudy1";
import FrameComponent14 from "../components/FrameComponent14";
import ProblemAndGoal from "../components/ProblemAndGoal";
import FrameComponent15 from "../components/FrameComponent15";
import FrameComponent16 from "../components/FrameComponent16";
import "./CaseStudyFinora.css";

const CaseStudyFinora = () => {
  return (
    <div className="case-study-finora">
      <CaseStudy1 />
      <FrameComponent14 />
      <ProblemAndGoal />
      <section className="personas-wrapper">
        <div className="personas">
          <b className="user-personas">User Personas</b>
          <div className="persona-details">
            <div className="phemelo-25-container">
              <p className="phemelo-25-">
                1. Phemelo, 25 - Junior Marketing Manager
              </p>
              <ul className="location-mafikeng-south-afri">
                <li className="location-mafikeng-south">
                  Location: Mafikeng, South Africa
                </li>
                <li className="location-mafikeng-south">
                  Tech Usage: Heavy user of mobile technology, prefers Apple Pay
                  for daily transactions.
                </li>
                <li className="location-mafikeng-south">
                  Goals: Save for a vacation, better track monthly expenses, and
                  avoid carrying cash.
                </li>
              </ul>
              <p className="phemelo-25-">&nbsp;</p>
              <p className="phemelo-25-">Key Features for Phemelo:</p>
              <ul className="location-mafikeng-south-afri">
                <li className="location-mafikeng-south">
                  Apple Pay integration for seamless payments.
                </li>
                <li>Spending categorization for tracking expenses.</li>
              </ul>
            </div>
            <div className="bakang-30-junior-lecturer-l-wrapper">
              <div className="phemelo-25-container">
                <p className="phemelo-25-">&nbsp;</p>
                <p className="phemelo-25-">2. Bakang, 30 - Junior Lecturer</p>
                <ul className="location-mafikeng-south-afri">
                  <li className="location-mafikeng-south">
                    Location: Mafikeng, South Africa
                  </li>
                  <li className="location-mafikeng-south">
                    Tech Usage: Early adopter, uses Samsung Pay for most
                    purchases.
                  </li>
                  <li className="location-mafikeng-south">
                    Goals: Build savings to pay iLobola for his partner.
                  </li>
                </ul>
                <p className="phemelo-25-">&nbsp;</p>
                <p className="phemelo-25-">Key Features for Bakang:</p>
                <ul className="location-mafikeng-south-afri">
                  <li className="location-mafikeng-south">
                    Samsung Pay integration.
                  </li>
                  <li>Aggregated data from multiple accounts.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent15 />
      <FrameComponent16 />
    </div>
  );
};

export default CaseStudyFinora;

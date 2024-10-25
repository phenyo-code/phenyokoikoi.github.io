import PropTypes from "prop-types";
import "./FrameComponent14.css";

const FrameComponent14 = ({ className = "" }) => {
  return (
    <section className={`overview-content-container ${className}`}>
      <div className="overview-content1">
        <div className="overview-details1">
          <div className="intro">
            <div className="heading">
              <b className="overview5">Overview</b>
            </div>
            <div className="finora-is-a-container">
              <p className="finora-is-a">{`Finora is a cutting-edge digital banking platform designed to provide `}</p>
              <p className="finora-is-a">{`tech-savvy, urban individuals with a modern, convenient, and secure `}</p>
              <p className="finora-is-a">{`way to manage their finances. The app focuses on simplifying `}</p>
              <p className="finora-is-a">{`transactions, supporting digital wallets like Apple Pay and `}</p>
              <p className="finora-is-a">{`Samsung Pay, and offering intuitive budgeting tools for young professionals `}</p>
              <p className="finora-is-a">and students</p>
            </div>
          </div>
          <div className="project-details2">
            <div className="tools-and-role">
              <b className="identify-the-key-container">Tools</b>
              <div className="figma-sketch">Figma, Sketch</div>
            </div>
            <div className="tools-and-role">
              <div className="role3">Role</div>
              <div className="research-uiux3">{`Research & UI/UX `}</div>
            </div>
            <div className="timeline-parent1">
              <div className="timeline3">Timeline</div>
              <div className="april-2024">April 2024</div>
            </div>
          </div>
        </div>
        <div className="research-highlights">
          <div className="home-visual">
            <img
              className="home-1-icon"
              loading="lazy"
              alt=""
              src="/home-1@2x.png"
            />
            <div className="research-goals">
              <b className="identify-the-key-container">User Research</b>
              <div className="research-objectives">Research Objectives.</div>
            </div>
          </div>
          <img
            className="cards-1-icon"
            loading="lazy"
            alt=""
            src="/home-tracks-1-1@2x.png"
          />
          <img
            className="cards-1-icon"
            loading="lazy"
            alt=""
            src="/cards-1@2x.png"
          />
        </div>
        <div className="understanding-needs">
          <div className="expressed-interest-in-container">
            <p className="finora-is-a">{`To understand the needs, behaviors, and pain points of potential users regarding `}</p>
            <p className="finora-is-a">
              digital banking, we conducted user research with the following
              objectives:
            </p>
          </div>
          <div className="identifying-features">
            <div className="identify-the-key-container">
              <p className="finora-is-a">
                1.) Identify the key features users expect in a digital banking
                app.
              </p>
              <p className="finora-is-a">
                2.) Understand the challenges faced by users with traditional
                banking methods.
              </p>
              <p className="finora-is-a">
                3.) Gather insights on user preferences for payment methods and
                budgeting tools.
              </p>
            </div>
          </div>
        </div>
        <div className="methodology">
          <div className="findings">
            <div className="survey-methodology">
              <div className="identify-the-key-container">
                <p className="finora-is-a">{`So the methodology that was used was a survey. `}</p>
                <p className="finora-is-a">{`Having distributed an online survey to 200 urban users aged 18-35, focusing on their `}</p>
                <p className="finora-is-a">
                  banking habits, preferred payment methods, and desired
                  features in a banking app.
                </p>
              </div>
              <div className="key-findings">Key findings</div>
            </div>
            <div className="identify-the-key-container">
              <p className="finora-is-a">{`1.) 70% of respondents preferred using digital wallets (Apple Pay/Samsung Pay) for everyday `}</p>
              <p className="finora-is-a">
                transactions due to convenience and speed.
              </p>
            </div>
          </div>
          <div className="expressed-interest-in-container">
            <p className="expressed-interest-in">{`2.)  65% expressed interest in integrated budgeting features to help them manage `}</p>
            <p className="finora-is-a">their finances better</p>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;

import Project from "../components/Project";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import "./CaseStudyUniEats.css";

const CaseStudyUniEats = () => {
  return (
    <div className="case-study-unieats">
      <Project />
      <section className="overview-content-wrapper">
        <div className="overview-content">
          <div className="app-summary">
            <div className="app-details">
              <div className="app-description">
                <div className="app-overview">
                  <div className="overview-title">
                    <b className="overview2">Overview</b>
                  </div>
                  <div className="problem-content-parent">
                    <div className="problem-content">
                      <div className="unieats-is-a-container">
                        <p className="unieats-is-a">{`UniEats is a food delivery app designed specifically for university `}</p>
                        <p className="unieats-is-a">
                          students and faculty, enabling them to order meals
                          from their on-campus
                        </p>
                        <p className="unieats-is-a">{`cafeterias and have them delivered directly to their dorms, classrooms, or `}</p>
                        <p className="unieats-is-a">{`common areas. The project aimed to streamline the ordering and delivery `}</p>
                        <p className="unieats-is-a">{`process, allowing students to focus more on their academic and social `}</p>
                        <p className="unieats-is-a">{`activities rather than worrying about meal planning and long wait times at `}</p>
                        <p className="unieats-is-a">the cafeteria.</p>
                      </div>
                    </div>
                    <b className="problem-statement">Problem Statement</b>
                  </div>
                </div>
                <div className="project-details1">
                  <div className="details">
                    <b className="final-ui">Tools</b>
                    <div className="figma2">Figma</div>
                  </div>
                  <div className="details">
                    <div className="role1">Role</div>
                    <div className="research-uiux1">{`Research & UI/UX `}</div>
                  </div>
                  <div className="timeline-group">
                    <div className="timeline1">Timeline</div>
                    <div className="research-uiux1">September 2021</div>
                  </div>
                </div>
              </div>
              <div className="problem-description">
                <div className="unieats-is-a-container">
                  <p className="unieats-is-a">{`Universities have bustling environments, and students often struggle to `}</p>
                  <p className="unieats-is-a">{`balance academic commitments with meal times. Many cafeterias are `}</p>
                  <p className="unieats-is-a">{`overcrowded during peak hours, leading to long queues and wait times. `}</p>
                  <p className="unieats-is-a">
                    Additionally, students often have limited time between
                    classes to pick up
                  </p>
                  <p className="unieats-is-a">{`meals, leading to frustration and missed opportunities to grab food. `}</p>
                  <p className="unieats-is-a">{`Cafeteria staff also face the challenge of managing large in-person orders, `}</p>
                  <p className="unieats-is-a">
                    which causes delays and impacts customer satisfaction.
                  </p>
                  <p className="unieats-is-a">{`Our objective was to create an app that addresses these issues by offering a `}</p>
                  <p className="unieats-is-a">
                    convenient and efficient food delivery solution exclusively
                    within university campuses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
          <div className="findings-content-wrapper">
            <div className="findings-content">
              <div className="time-constraints-students-container">
                <span>
                  <p className="unieats-is-a">{`Time Constraints: Students often skip meals due to time constraints between classes and `}</p>
                  <p className="unieats-is-a">extracurricular activities.</p>
                  <p className="unieats-is-a">&nbsp;</p>
                  <p className="unieats-is-a">{`Limited Menu Visibility: Cafeteria menus are often only displayed in the physical location, making it `}</p>
                  <p className="unieats-is-a">
                    hard for students to plan their meals in advance.
                  </p>
                  <p className="unieats-is-a">&nbsp;</p>
                  <p className="unieats-is-a">
                    Demand for Convenience: Students prefer digital solutions
                    for quick orders and contactless delivery,
                  </p>
                  <p className="unieats-is-a">
                    {" "}
                    especially in the wake of increased hygiene concerns
                    post-pandemic.
                  </p>
                  <p className="unieats-is-a">&nbsp;</p>
                  <p className="unieats-is-a">{`Cafeteria Strain: Cafeteria staff struggle to manage large crowds during peak hours, leading to `}</p>
                  <p className="unieats-is-a">
                    slower service and decreased satisfaction.
                  </p>
                </span>
              </div>
              <div className="solution-development">
                <div className="unieats-is-a-container">
                  <p className="unieats-is-a">
                    Based on this research, the focus was placed on creating a
                    seamless, fast, and easy-to-use
                  </p>
                  <p className="unieats-is-a">
                    food delivery app that aligns with the busy schedules of
                    university students.
                  </p>
                </div>
              </div>
              <div className="findings-screenshot">
                <img
                  className="screenshot-2024-10-24-124500-1"
                  loading="lazy"
                  alt=""
                  src="/screenshot-20241024-124500-1@2x.png"
                />
              </div>
            </div>
          </div>
          <FrameComponent3 />
          <div className="final-ui-wrapper">
            <b className="final-ui">{`Final UI `}</b>
          </div>
        </div>
      </section>
      <section className="screen-examples">
        <div className="screen-types">
          <img
            className="home12-1-icon"
            loading="lazy"
            alt=""
            src="/home12-1@2x.png"
          />
          <img
            className="food-1-icon"
            loading="lazy"
            alt=""
            src="/food-1@2x.png"
          />
        </div>
        <div className="cart-example">
          <img
            className="cartfood-1-icon"
            loading="lazy"
            alt=""
            src="/cartfood-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default CaseStudyUniEats;

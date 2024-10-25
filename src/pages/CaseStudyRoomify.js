import Container from "../components/Container";
import Problem from "../components/Problem";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import "./CaseStudyRoomify.css";

const CaseStudyRoomify = () => {
  return (
    <div className="case-study-roomify">
    <Container/> 

      <section className="overview-container">
        <div className="overview-layout">
          <div className="overview-details">
            <b className="overview1">Overview</b>
            <div className="roomifycom-is-a-container">
              <p className="roomifycom-is-a">{`Roomify.com is a web platform designed to streamline the process of `}</p>
              <p className="roomifycom-is-a">{`securing student accommodation, allowing students to book residence `}</p>
              <p className="roomifycom-is-a">{`spaces online without having to visit the university or deal with informal `}</p>
              <p className="roomifycom-is-a">{`platforms like Facebook. The platform connects students directly with `}</p>
              <p className="roomifycom-is-a">{`on-campus and university-affiliated off-campus residences, offering a `}</p>
              <p className="roomifycom-is-a">
                secure and convenient way to find accommodation
              </p>
            </div>
          </div>
          <div className="project-details">
            <div className="project-info">
              <b className="tools1">Tools</b>
              <div className="figma1">Figma</div>
            </div>
            <div className="project-info">
              <div className="role">Role</div>
              <div className="research-uiux">{`Research & UI/UX `}</div>
            </div>
            <div className="timeline-parent">
              <div className="timeline">Timeline</div>
              <div className="march-april">March - April 2021</div>
            </div>
          </div>
        </div>
      </section>
      <Problem />
      <FrameComponent4 />
      <FrameComponent5 />
      <FrameComponent6 />
      <FrameComponent7 />
    </div>
  );
};

export default CaseStudyRoomify;

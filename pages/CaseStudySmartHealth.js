import CaseStudy from "../components/CaseStudy";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent13 from "../components/FrameComponent13";
import "./CaseStudySmartHealth.css";

const CaseStudySmartHealth = () => {
  return (
    <div className="case-study-smart-health">
      <CaseStudy />
      <FrameComponent11 />
      <section className="research-content-wrapper">
        <div className="research-content">
          <b className="user-research">User Research</b>
          <div className="research-insights">
            <div className="insight-details">
              <div className="insight-goals">
                <div className="to-understand-the-container">
                  <p className="to-understand-the">{`To understand the specific needs of the hospital and its healthcare providers, we conducted `}</p>
                  <p className="to-understand-the">{`interviews and surveys with doctors, nurses, administrative staff, and IT personnel. `}</p>
                  <p className="to-understand-the">
                    We identified the following critical insights:
                  </p>
                </div>
                <div className="ease-of-use-container">
                  <p className="to-understand-the">{`Ease of Use: Healthcare staff wanted an intuitive system that could be learned quickly `}</p>
                  <p className="to-understand-the">
                    without disrupting daily routines.
                  </p>
                  <p className="to-understand-the">&nbsp;</p>
                  <p className="to-understand-the">{`Real-Time Data Access: Doctors and nurses emphasized the need for instant access to `}</p>
                  <p className="to-understand-the">
                    patient data, particularly during emergencies.
                  </p>
                  <p className="to-understand-the">&nbsp;</p>
                  <p className="to-understand-the">{`Patient Data Security: Administrators and IT staff prioritized data security and compliance `}</p>
                  <p className="to-understand-the">{`with healthcare regulations, such as the Protection of Personal Information (POPI) Act in `}</p>
                  <p className="to-understand-the">South Africa.</p>
                  <p className="to-understand-the">&nbsp;</p>
                  <p className="to-understand-the">{`Mobile Access: Some doctors requested mobile access to patient data, allowing them to check `}</p>
                  <p className="to-understand-the">
                    records from their phones or tablets, even when they were
                    off-site.
                  </p>
                </div>
              </div>
              <div className="to-understand-the-container">
                <p className="to-understand-the">
                  These insights shaped the design and functionality of the EHR
                  system to ensure it aligned
                </p>
                <p className="to-understand-the">
                  with the hospital’s specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rectangle-parent">
        <img className="frame-child" alt="" src="/rectangle-13@2x.png" />
        <img className="rectangle-1-3" alt="" src="/rectangle-1-3@2x.png" />
        <img
          className="rectangle-2-3"
          loading="lazy"
          alt=""
          src="/rectangle-2-3@2x.png"
        />
      </section>
      <section className="goals-content-wrapper">
        <div className="goals-content">
          <b className="user-research">Design Goals</b>
          <div className="efficiency-and-speed-container">
            <p className="to-understand-the">{`Efficiency and Speed: Enable fast and accurate access to patient information, with `}</p>
            <p className="to-understand-the">
              easy-to-navigate interfaces for healthcare providers.
            </p>
            <p className="to-understand-the">&nbsp;</p>
            <p className="to-understand-the">{`Security and Compliance: Ensure access controls, data encryption, secure login protocols, and `}</p>
            <p className="to-understand-the">
              compliance with local data protection regulations like the POPI
              Act.
            </p>
            <p className="to-understand-the">&nbsp;</p>
            <p className="to-understand-the">{`Interoperability: Design the system to integrate with existing medical devices and other `}</p>
            <p className="to-understand-the">
              hospital systems, such as billing and lab results.
            </p>
            <p className="to-understand-the">&nbsp;</p>
            <p className="to-understand-the">{`Patient-Centric Features: Allow patients to access their own records through a secure patient `}</p>
            <p className="to-understand-the">
              portal, encouraging engagement with their healthcare.
            </p>
          </div>
        </div>
      </section>
      <section className="iteration-content-wrapper">
        <div className="iteration-content">
          <b className="iteration">Iteration</b>
          <div className="iteration-description">
            <div className="ease-of-use-container">
              <p className="to-understand-the">{`The initial design of the Electronic Health Record (EHR) system lacked speech-to-text `}</p>
              <p className="to-understand-the">{`functionality, which led to feedback from medical professionals that inputting patient data `}</p>
              <p className="to-understand-the">{`manually will be time-consuming and inefficient. After collecting feedback, we implemented a `}</p>
              <p className="to-understand-the">{`second iteration that introduced speech-to-text functionality, aiming to improve efficiency for `}</p>
              <p className="to-understand-the">healthcare providers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="iterations">
        <img
          className="iterationb-1-icon"
          loading="lazy"
          alt=""
          src="/iterationb-1@2x.png"
        />
        <img className="iterationa-1-icon" alt="" src="/iterationa-1@2x.png" />
      </section>
      <FrameComponent12 />
      <FrameComponent13 />
      <section className="next-steps-content-wrapper">
        <div className="next-steps-content">
          <b className="user-research">Next Steps</b>
          <div className="the-project-is-container">
            <p className="to-understand-the">
              1.) The project is estimated to be completed in November 2024
            </p>
            <p className="to-understand-the">
              2.) Roll out a campaign to educate end-users on using the portal
            </p>
            <p className="to-understand-the">{`3.) Incorporate predictive analytics tools to help the hospital identify trends in patient data, `}</p>
            <p className="which-can-inform">
              {" "}
              which can inform preventive healthcare measures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudySmartHealth;

import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`results-layout-wrapper ${className}`}>
      <div className="results-layout">
        <div className="results1" data-scroll-to="resultsContainer">
          
          <a className="results2">Results</a>
          <div className="results-child" />
          <div className="results-description-container">
            <div className="reduction-in-application-container">
              <p className="reduction-in-application">{`50% Reduction in Application Times: Students were able to secure accommodation online in `}</p>
              <p className="reduction-in-application">
                half the time compared to the traditional process.
              </p>
              <p className="reduction-in-application">&nbsp;</p>
              <p className="reduction-in-application">{`Increased Student Satisfaction: Students appreciated the transparency of the platform and `}</p>
              <p className="reduction-in-application">
                the ability to compare accommodations with detailed information.
              </p>
              <p className="reduction-in-application">&nbsp;</p>
              <p className="reduction-in-application">{`Higher Occupancy Rates: University residences and verified landlords saw an increase in `}</p>
              <p className="reduction-in-application">
                bookings due to the streamlined process and verified listings.
              </p>
              <p className="reduction-in-application">&nbsp;</p>
              <p className="reduction-in-application">{`Increased Security: With all payments handled through the platform, the risk of scams or `}</p>
              <p className="reduction-in-application">
                fraudulent accommodation offers was eliminated.
              </p>
            </div>
          </div>
        </div>
        <div
          className="nextstepsroomify"
          data-scroll-to="nextStepsRoomifyContainer"
        >
          <div className="next-steps-layout">
            <div className="next-steps5">Next Steps</div>
          </div>
          <div className="roll-out-roomify-container">
            <p className="reduction-in-application">{`1.) Roll out Roomify to more universities to offer the same convenience to students across `}</p>
            <p className="the-country"> the country.</p>
            <p className="reduction-in-application">{`2.) Expand the platform to include private residences and short-term stays for students needing `}</p>
            <p className="the-country"> temporary accommodation.</p>
            <p className="reduction-in-application">{`3.) Work with university administration to integrate residence management systems for easier `}</p>
            <p className="the-country">
              {" "}
              allocation and real-time updates on availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent7;

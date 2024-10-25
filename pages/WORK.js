import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import HealthDetails from "../components/HealthDetails";
import { useNavigate } from "react-router-dom";
import FrameComponent18 from "../components/FrameComponent18";
import "./WORK.css";

const WORK = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/case-study-unieats");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    navigate("/case-study-nwu");
  }, [navigate]);

  return (
    <div className="work">
      <FrameComponent />
      <section className="work-image">
        <div className="frame-parent">
          <div className="phenyo-koikoi-wrapper">
            {/* SVG Animation for Phenyo Koikoi */}
            <svg viewBox="0 0 100 20" className="phenyo-koikoi-svg">
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stop-color="#ffff" />
                  <stop offset="75%" stop-color="#ffff" />
                  <stop offset="100%" stop-color="#fffff" />
                </linearGradient>
                <pattern
                  id="wave"
                  x="0"
                  y="-0.1"
                  width="80%"
                  height="100%"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    fill="url(#gradient)"
                  >
                    <animateTransform
                      attributeName="transform"
                      begin="7s"
                      dur="5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    />
                  </path>
                </pattern>
              </defs>
              <text
                textAnchor="middle"
                x="42.5"
                y="15"
                fontSize="12"
                fill="white"
                fillOpacity="0.1"
              >
                Phenyo Koikoi
              </text>
              <text
                textAnchor="middle"
                x="42.5"
                y="15"
                fontSize="12"
                fill="url(#wave)"
                fillOpacity="1"
              >
                Phenyo Koikoi
              </text>
            </svg>
          </div>

          
          <div className="hi-im-a-container">
            <p className="hi-im-a">
              Hi, I’m a South African based product designer
            </p>
            <div class="abstract-light"></div>
            
            

            <p className="hi-im-a">
              who transforms complex problems into simple, user-centered
              solutions.
            </p>
          </div>

        </div>

      </section>
      <section className="frame-group">
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="my-work-wrapper">
              <div className="my-work">My work</div>
            </div>
            <b className="placeholder">__________</b>
          </div>
        </div>
        <HealthDetails />
        <div className="frame-div">
          <div className="frame-parent1">
            <div className="rectangle-group" onClick={onGroupContainerClick}>
              <div className="frame-item" />
              <img
                className="unieats-1-icon"
                loading="lazy"
                alt=""
                src="/unieats-1@2x.png"
              />
            </div>
            <div className="frame-parent2">
              <div className="uni-eats-food-delivery-parent">
                <div className="uni-eats-food-delivery">
                  <div className="unieats">UniEats</div>
                  <div className="food-delivery">
                    <ul className="food-delivery1">
                      <li>Food delivery</li>
                    </ul>
                  </div>
                </div>
                <div className="mobile-app-uiux">Mobile App, UI/UX Design</div>
              </div>
              
              
              <div className="frame-parent3">
                <div className="frame-wrapper1">
                  <div className="registration-system-parent">
                    <div className="registration-system">
                      <ul className="food-delivery1">
                        <li>Registration system</li>
                      </ul>
                    </div>
                    <div
                      className="nwu-parent"
                      onClick={onGroupContainerClick1}
                    >
                      <div className="nwu">{`NWU `}</div>
                      <div className="placeholder-parent">
                        <div className="placeholder1" />
                        <img
                          className="nwu-1-icon"
                          alt=""
                          src="/nwu-1@2x.png"
                        />
                        <img
                          className="placeholder-icon"
                          alt=""
                          src="/placeholder1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="responsive-web-app">
                  Responsive Web App, UI/UX Design
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent18 />
      </section>
      <section className="placeholder2" />
    </div>
  );
};

export default WORK;

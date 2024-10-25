import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <div className={`main-content ${className}`}>
      <div className="main-content-inner">
        <div className="overview-container-parent">
          <div className="overview-container1">
            <div className="overview-content-parent">
              <div className="overview-content2">
                <div className="app-overview1">
                  <b className="overview6">Overview</b>
                </div>
                <div className="flare-is-an-container">
                  <p className="flare-is-an">{`FLARE is an e-commerce app dedicated to selling clothing, with a focus `}</p>
                  <p className="flare-is-an">{`on showcasing and supporting local South African fashion brands. The `}</p>
                  <p className="flare-is-an">{`goal of the project was to create a seamless shopping experience that `}</p>
                  <p className="flare-is-an">{`promotes local designers and offers a wide variety of fashion choices, from `}</p>
                  <p className="flare-is-an">
                    everyday wear to high-end fashion.
                  </p>
                </div>
              </div>
              <div className="tools-role-parent">
                <div className="tools-role">
                  <b className="tools5">Tools</b>
                  <div className="figma-sketch1">Figma, Sketch</div>
                </div>
                <div className="tools-role">
                  <div className="to-better-understand-container">Role</div>
                  <div className="figma-sketch1">{`Research & UI/UX `}</div>
                </div>
                <div className="timeline5">Timeline</div>
              </div>
            </div>
          </div>
          <div className="research-container1">
            <div className="research-content1">
              <div className="july-august">July - August 2023</div>
              <div className="research-details">
                <div className="research4">
                  <div className="user-research-group">
                    <b className="user-research4">User Research</b>
                    <div className="rectangle-6-1-parent">
                      <img
                        className="rectangle-6-1"
                        alt=""
                        src="/rectangle-6-1@2x.png"
                      />
                      <img
                        className="rectangle-9-1"
                        loading="lazy"
                        alt=""
                        src="/rectangle-9-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="research-insights1">
                    <div className="local-support">
                      <div className="local-support-content">
                        <div className="to-better-understand-container">
                          <p className="flare-is-an">{`To better understand the needs of both local clothing brands and potential customers, `}</p>
                          <p className="flare-is-an">{`we conducted user research through interviews, surveys, and market analysis. `}</p>
                          <p className="flare-is-an">
                            Key insights from this research included:
                          </p>
                        </div>
                      </div>
                      <div className="to-better-understand-container">
                        <p className="flare-is-an">{`Support for Local Business: Consumers expressed a desire to support South African fashion `}</p>
                        <p className="flare-is-an">
                          designers but found it difficult to access their
                          products online.
                        </p>
                        <p className="flare-is-an">&nbsp;</p>
                        <p className="flare-is-an">{`Unique Style Preferences: South African consumers value unique, culturally inspired designs, `}</p>
                        <p className="flare-is-an">
                          which aren’t always available in international
                          clothing brands.
                        </p>
                        <p className="flare-is-an">&nbsp;</p>
                        <p className="flare-is-an">
                          Trust and Security Concerns: Many consumers are
                          hesitant to shop on unfamiliar local platforms
                        </p>
                        <p className="flare-is-an">
                          {" "}
                          due to concerns about security, payment options, and
                          delivery reliability.
                        </p>
                        <p className="flare-is-an">&nbsp;</p>
                        <p className="flare-is-an">{`Mobile-First Preferences: A majority of users preferred to shop using mobile apps due to ease `}</p>
                        <p className="flare-is-an">
                          of access and the growing reliance on mobile commerce
                          in South Africa.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="platform-development">
                    <div className="to-better-understand-container">
                      <p className="flare-is-an">{`Based on this research, we aimed to build a platform that not only promotes local clothing `}</p>
                      <p className="flare-is-an">
                        but also meets modern e-commerce standards in terms of
                        usability, security, and convenience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="problem5">
              <b className="tools5">Problem Statement</b>
              <div className="flare-is-an-container">
                <p className="flare-is-an">
                  While the South African fashion industry is vibrant and
                  diverse, many local
                </p>
                <p className="flare-is-an">{`clothing brands struggle to gain visibility in a market dominated by international `}</p>
                <p className="flare-is-an">{`retailers. Customers also face challenges when trying to discover and purchase `}</p>
                <p className="flare-is-an">{`local fashion online, as there is no centralized platform that focuses solely on `}</p>
                <p className="flare-is-an">{`South African clothing brands. Traditional retail stores limit reach, and many local brands `}</p>
                <p className="flare-is-an">
                  lack the resources to build their own e-commerce platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="goal-container">
        <div className="goal5">
          <b className="tools5">Goal Statement</b>
          <div className="flare-is-an-container">
            <p className="flare-is-an">{`When in operation, FLARE aims to provide an easy-to-use online marketplace where `}</p>
            <p className="flare-is-an">{`South African fashion designers and brands can showcase their work, and customers can `}</p>
            <p className="flare-is-an">{`browse and purchase clothing in a seamless and secure way. The platform will focus on `}</p>
            <p className="flare-is-an">{`celebrating local culture and craftsmanship while making the shopping experience convenient `}</p>
            <p className="flare-is-an">and enjoyable.</p>
          </div>
        </div>
      </div>
      <div className="personas4">
        <div className="personas-content">
          <b className="tools5">User Personas</b>
          <div className="persona-thandi">
            <div className="to-better-understand-container">
              <p className="flare-is-an">
                Persona 1: Thandi (Local Fashion Enthusiast)
              </p>
              <ul className="age-21-occupation-student-go">
                <li className="occupation-student">Age: 21</li>
                <li className="occupation-student">Occupation: Student</li>
                <li className="occupation-student">{`Goals: Thandi wants to support local fashion designers, but she finds it hard to discover `}</li>
              </ul>
              <p className="them-online-she">{`      them online. She wants a platform that highlights local brands and gives her access to unique, `}</p>
              <p className="them-online-she"> high-quality pieces.</p>
              <ul className="age-21-occupation-student-go">
                <li className="occupation-student">{`Pain Points: Thandi often shops online but feels limited by the lack of platforms that focus on `}</li>
              </ul>
              <p className="them-online-she">{`      South African designers. She doesn’t want to rely on social media for shopping and prefers a `}</p>
              <p className="them-online-she"> more curated experience.</p>
            </div>
          </div>
        </div>
        <div className="persona-2-sipho-container">
          <p className="flare-is-an">{`Persona 2: Sipho (Fashion Designer & Brand Owner)`}</p>
          <ul className="age-21-occupation-student-go">
            <li className="occupation-student">Age: 34</li>
            <li className="occupation-student">
              Occupation: Owner of Sipho Designs (local streetwear brand)
            </li>
            <li className="occupation-student">{`Goals: Sipho wants to expand his customer base beyond local boutiques and markets. `}</li>
          </ul>
          <p className="them-online-she">{`       He needs an online platform that allows him to showcase his designs and connect with `}</p>
          <p className="them-online-she">
            {" "}
            customers who appreciate his brand’s unique style.
          </p>
          <ul className="age-21-occupation-student-go">
            <li className="occupation-student">{`Pain Points: Sipho struggles with the logistics of building an online presence and managing `}</li>
          </ul>
          <p className="them-online-she">{`      orders through different channels. He needs an easy-to-use platform where he can focus `}</p>
          <p className="them-online-she">
            {" "}
            on his designs while reaching a wider audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

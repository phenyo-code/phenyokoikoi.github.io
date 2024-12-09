import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WORK from "./pages/WORK";
import CaseStudySmartHealth from "./pages/CaseStudySmartHealth";
import CaseStudyFinora from "./pages/CaseStudyFinora";
import CaseStudyNWU from "./pages/CaseStudyNWU";
import CaseStudyFLARE from "./pages/CaseStudyFLARE";
import ABOUT from "./pages/ABOUT";
import CaseStudyUniEats from "./pages/CaseStudyUniEats";
import CaseStudyRoomify from "./pages/CaseStudyRoomify"; 


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [isSmallScreen, setIsSmallScreen] = useState(false);


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-smart-health":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-finora":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-nwu":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-flare":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-unieats":
        title = "";
        metaDescription = "";
        break;
      case "/case-study-roomify": 
        title = "Roomify Case Study";
        metaDescription = "Learn more about the Roomify project.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      {/* Display overlay if screen is small */}
      {isSmallScreen && (
        <div className="blur-overlay">
          <div className="blur-message">
            Screen too small. Please switch to a full desktop view.
          </div>
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<WORK />} />
        <Route path="/case-study-smart-health" element={<CaseStudySmartHealth />} />
        <Route path="/case-study-finora" element={<CaseStudyFinora />} />
        <Route path="/case-study-nwu" element={<CaseStudyNWU />} />
        <Route path="/case-study-flare" element={<CaseStudyFLARE />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/case-study-unieats" element={<CaseStudyUniEats />} />
        <Route path="/case-study-roomify" element={<CaseStudyRoomify />} />
      </Routes>
    </div>
  );
}

export default App;

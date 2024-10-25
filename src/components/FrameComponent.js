import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <section className={`work-inner ${className}`}>
      <header className="rectangle-container">
        <div className="frame-inner" />
        <div className="frame-wrapper2">
          <div className="frame-parent8">
            <div className="frame-parent9">
              <div className="my-work-container">
                <a className="my-work1">My Work</a>
              </div>
              <b className="placeholder3">__________</b>
            </div>
            <a className="about1" onClick={onAboutTextClick}>
              About
            </a>
          </div>
        </div>
        <a href="https://www.linkedin.com/in/phenyo-koikoi-96a976310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
  <Button
    className="frame-button"
    disableElevation
    variant="contained"
    sx={{
      textTransform: "none",
      color: "#fff",
      fontSize: "24",
      background: "#6b87ed",
      borderRadius: "50px",
      "&:hover": { background: "#6b87ed" },
      width: 144,
      height: 45,
    }}
  >
    Connect
  </Button>
</a>
      </header>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

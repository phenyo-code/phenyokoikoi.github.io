import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent17.css";

const FrameComponent17 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMyWorkTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`about-inner ${className}`}>
      <header className="frame-parent11">
        <nav className="frame-nav">
          <div className="frame-child6" />
          <div className="phenyok-wrapper">
            <a className="phenyok">PHENYO.K</a>
          </div>
          <div className="my-work2">
            <div className="my-work-about">
              <a className="my-work3" onClick={onMyWorkTextClick}>
                My Work
              </a>
              <a className="about2">About</a>
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
        </nav>
        <div className="wrapper1">
          <b className="b4">__________</b>
        </div>
      </header>
    </div>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;

import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`design-layout-wrapper ${className}`}>
      <div className="design-layout">
        <div className="designs6" data-scroll-to="designsText">
          Designs
        </div>
        <div className="design-visuals-container">
          <div className="designs7">
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Room_Wireframe.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Room_Wireframe.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Reviews_Wireframe.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Home_Wireframe.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Home_Lofi.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Room_Lofi.png"
            />
            <img
              className="room-wireframe-1-icon"
              loading="lazy"
              alt=""
              src="/Reviews_Lofi.png"
            />
            <img
              className="gallery-lo-fi-1-icon"
              loading="lazy"
              alt=""
              src="/Gallery_Lofi.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;

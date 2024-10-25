import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`final-ui-group ${className}`}>

      <div className="finaluiroom">
        <div className="roomifyhome-1-parent">
          <img
            className="roomifyhome-1-icon"
            alt=""
            src="/RoomifyHome 1.png"
          />
          <img
            className="roomify-room-2-icon"
            alt=""
            src="/Roomify_Room.png"
          />
          <img
            className="roomify-gallery-1-icon"
            alt=""
            src="/Roomify_Gallery 1.png"
          />
          <img
            className="roomify-reviews-1-icon"
            loading="lazy"
            alt=""
            src="/Roomify_Reviews 1.png"
          />
        </div>
      </div>
    </section>
  );
};


export default FrameComponent6;

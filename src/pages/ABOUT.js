import FrameComponent17 from "../components/FrameComponent17";
import "./ABOUT.css";

const ABOUT = () => {
  return (
    <div className="about">
      <FrameComponent17 />
      <main className="content">
        <section className="content-inner">
          <div className="phenyo-1-parent">
            <img
              className="phenyo-1-icon"
              loading="lazy"
              alt=""
              src="/phenyo-1@2x.png"
            />
            <div className="introduction">
              <b className="hi-im-phenyo-container">
                <p className="hi-im-phenyo">{`Hi, I’m Phenyo Koikoi, a  South African based `}</p>
                <p className="product-designer-with">
                  product designer with a passion for creating
                </p>
                <p className="product-designer-with">{`thoughtful and engaging digital experiences. `}</p>
                <p className="product-designer-with">
                  I specialize in designing intuitive, user-centered
                </p>
                <p className="product-designer-with">
                  products that blend functionality with beautiful
                </p>
                <p className="product-designer-with">{`aesthetics. From wireframes to fully polished `}</p>
                <p className="product-designer-with">{`prototypes, I love taking ideas from concept to `}</p>
                <p className="product-designer-with">{`reality, ensuring each design is crafted to meet `}</p>
                <p className="product-designer-with">{`both user needs and business goals. `}</p>
                <p className="product-designer-with">&nbsp;</p>
                <p className="product-designer-with">{`In addition to my design expertise, I have a solid `}</p>
                <p className="product-designer-with">{`foundation in front-end development, with `}</p>
                <p className="product-designer-with">{`knowledge of React.js and React Native. This allows `}</p>
                <p className="product-designer-with">
                  me to collaborate seamlessly with developers,
                </p>
                <p className="product-designer-with">{`bridging the gap between design and `}</p>
                <p className="hi-im-phenyo">{`implementation.  Using tools such as Figma, I’m `}</p>
                <p className="product-designer-with">{`able to deliver designs that are not only visually `}</p>
                <p className="product-designer-with">{`compelling but also ready for development. `}</p>
              </b>
            </div>
          </div>
        </section>
        <section className="outside-of-work-container">
          <p className="product-designer-with">
            Outside of work, I’m an Amapiano music producer where I channel my
            creativity into crafting
          </p>
          <p className="product-designer-with">{`beats and exploring new sounds. This musical journey keeps my creative energy flowing, `}</p>
          <p className="product-designer-with">{`influencing my design process with a fresh perspective and a deep appreciation for rhythm and `}</p>
          <p className="product-designer-with">balance.</p>
        </section>
      </main>
    </div>
  );
};

export default ABOUT;

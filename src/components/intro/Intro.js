import React from "react";
import "./Intro.css";
import { animated } from "react-spring";
import { use3dEffect } from "use-3d-effect";
const Intro = () => {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);
  return (
    <div className="intro">
      <animated.div
        ref={ref}
        style={{
          background: "#61dafb",
          color: "white",
          padding: "2em",
          ...style,
        }}
        {...mouseHandlers}
      >
        <div className="card 1">
          <div className="card_image">
            {" "}
            <img src="https://avatars.githubusercontent.com/u/59965072?v=4" />
          </div>

          <div className="card_title title-white">
            <p>Card Title</p>
          </div>
          <div className="paragraph">
            <p className=" color-white">
              <span>
                Wite a short introduction, description, member-info, etc. here.
                Wite an introduction, description, member-info, etc. here . Wite
                an introduction, description, member-info, etc. here.{" "}
              </span>
            </p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Intro;

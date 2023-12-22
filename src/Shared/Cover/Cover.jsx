import PropTypes from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, heading, subheading }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 20 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero min-h-[600px]">
        <div className="hero-content text-center text-neutral-content hero-overlay bg-opacity-60 w-9/12 flex flex-col justify-center items-center h-60">
          <h1 className=" text-6xl font-bold">{heading}</h1>
          <p className="w-9/12">{subheading}</p>
        </div>
      </div>
    </Parallax>
  );
};

Cover.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default Cover;

import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto pb-12">
      <p className=" mb-3">{subHeading}</p>
      <h3 className="border-y-4 py-4 text-3xl font-semibold uppercase">
        {heading}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;

import { Link } from "react-router-dom";
import hero from "../../assets/img/hero.webp";

const Banner = () => {
  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className=" md:flex  gap-4 my-16">
          <div className="flex-[1] px-4 p-8 flex flex-col justify-center gap-12">
            <h1 className="text-6xl font-bold">
              GrowUp brings all your tasks, teammates, and tools together <br />
            </h1>
            <p>
              With GrowUp you can drive clarity and impact at scale by
              connecting work and workflows to company-wide goals.
            </p>
            <div>
              <Link to={"/dashboard"} className="btn btn-ghost btn-outline">
                Let’s Explore
              </Link>
            </div>
          </div>
          <div className="flex-[1] h-[600px] rounded-md overflow-hidden ">
            <img className="w-full pt-8 mt-12" src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

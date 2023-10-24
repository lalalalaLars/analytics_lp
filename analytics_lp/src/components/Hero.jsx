import { background, heroChart } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div>
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "108vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: `url(${background})`,
        }}
      >
        <div className="lg:pt-10 pt-20 absolute flex flex-col md:flex-row items-center">
          <div className="p-4 md:w-[510px] ml-4 md:ml-40">
            <h1 className="pb-5 font-roboto font-bold text-white text-[50px] leading-tight">
              Monitor your business on a real-time dashboard
            </h1>
            <p className="md:w-[450px] pb-5 roboto font-regular secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam.{" "}
            </p>
            <div className="flex lg:justify-start justify-center">
              <Button
                style={
                  "bg-[#EF2A82] w-[206px] h-[50px] rounded-[68px] mt-10 text-white"
                }
                btnText={"Try for free"}
              />
            </div>
          </div>

          <div className="flex w-full justify-end mt-5 lg:mt-[99px]">
            <img
              className=" md:w-[873px] md:h-[654.57px]"
              src={heroChart}
              alt="hero chart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { features } from "../constants";

const MainFeatures = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className=" flex flex-col items-center lg:mr-40 lg:ml-40 w-full">
        <h2 className="text-[40px] font-roboto font-bold primary text-center mb-4">
          Main Features
        </h2>
        <p className=" lg:w-[980px] p-4 text-center text-[16px] font-roboto secondary ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae
          nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus
          pulvinar sit amet. Id vel in nam malesuada.
        </p>

        <div className="mt-10 lg:mt-[50px] lg:flex">
          {features.map((feature) => (
            <div key={feature.id}>
              <div className="flex flex-col p-4 gap-4 items-center ">
                <img src={feature.icon} alt="feature icon" />
                <h3 className="primary font-roboto font-bold">
                  {feature.title}
                </h3>
                <p className="text-center text-[16px] secondary font-roboto">
                  {feature.descripton}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;

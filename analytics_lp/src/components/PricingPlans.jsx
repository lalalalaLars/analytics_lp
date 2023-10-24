import { backgroundbottom } from "../assets";
import { pricingCards } from "../constants";
import Button from "./Button";
import Footer from "./Footer";

const PricingPlans = () => {
  return (
    <div>
      <div
        className="relative"
        style={{
          width: "100vw",
          height: "160vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          background: `url(${backgroundbottom})`,
        }}
      >
        <div className=" w-full mt-[250px] absolute">
          <div className="flex flex-col gap-8 items-center justify-center">
            <h2 className=" font-roboto font-bold text-white text-[40px] leading-tight">
              Pricing Plans
            </h2>
            <p className="lg:w-[600px] text-center font-roboto text-[16px] secondary ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est.
            </p>
          </div>
          <div className="flex justify-center gap-x-20 lg:mr-40 lg:ml-40 mt-20 ">
            {pricingCards.map((card) => (
              <div
                className="group bg-[#0F1F4B] hover:bg-white ease-in-out duration-500 hover:shadow-lg rounded-[30px] w-[340px] h-[440px] flex flex-col items-center justify-center"
                key={card.id}
              >
                <div className="gap-8 w-full flex flex-col items-center">
                  <div className="flex flex-col items-center">
                    <h3 className="text-white group-hover:text-[#172755] ease-in-out duration-500 text-[30px] font-bold font-roboto">
                      {card.product}
                    </h3>
                    <p className="font-roboto secondary text-[16px]">
                      up to {card.userLimit} users
                    </p>
                  </div>
                  <div className="w-[220px] flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#2A407C] mt-[10px] " />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className=" text-white group-hover:text-[#172755] ease-in-out duration-500 text-[40px] font-roboto font-bold">
                      <span className="text-[20px]">$</span>
                      {card.price}
                    </h1>
                    <p className="secondary">pr month</p>
                  </div>
                </div>
                <Button
                  style={
                    "border-[1px] border-[#2A407C] group-hover:bg-[#EF2A82] group-hover:border-none w-[206px] h-[50px] rounded-[68px] mt-10 text-white ease-in-out duration-500"
                  }
                  btnText={"Order"}
                />
              </div>
            ))}
          </div>
          <div className=" lg:mr-40 lg:ml-40 flex justify-between items-center md:flex-row flex-col border-t-[1px] border-t-[#2A407C] mt-[100px] " />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;

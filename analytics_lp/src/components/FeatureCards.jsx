import { featureCards } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full mt-40">
      {featureCards.map((featureCard, index) => (
        <div
          className={`flex mt-10 lg:mr-40 lg:ml-40 ${
            index === 1 ? "flex-row-reverse" : ""
          }`}
          key={featureCard.id}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-[40px] lg:w-[400px] font-roboto font-bold primary">
              {featureCard.title}
            </h2>
            <p className="secondary lg:w-[550px] text-[16px] font-roboto">
              {featureCard.descripton}
            </p>
          </div>
          <div>
            <img src={featureCard.image} alt="featurecard image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

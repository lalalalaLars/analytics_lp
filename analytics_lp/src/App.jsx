import {
  Navbar,
  Hero,
  MainFeatures,
  FeatureCards,
  PricingPlans,
} from "./components";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <MainFeatures />
      <FeatureCards />
      <PricingPlans />
    </div>
  );
}

export default App;

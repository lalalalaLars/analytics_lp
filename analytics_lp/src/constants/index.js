import {
  clock,
  computer,
  rocket,
  webchart,
  polediagram,
  calendar,
} from "../assets";

export const navLinks = [
  {
    id: "products",
    title: "Products",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

export const signLinks = [
  {
    id: "signin",
    title: "Sign in",
  },
  {
    id: "signup",
    title: "Sign up",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: clock,
    title: "Monitoring 24/7",
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Elementum nisi aliquet volutpat.",
  },
  {
    id: "feature-2",
    icon: computer,
    title: "Widget System",
    descripton:
      "Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar.",
  },
  {
    id: "feature-3",
    icon: rocket,
    title: "Best Performance",
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat.",
  },
];

export const featureCards = [
  {
    id: "featureCard-1",
    title: "Automated Reports & Widget Alerts",
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: webchart,
  },
  {
    id: "featureCard-2",
    title: "Fully customizable to address your needs",
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: polediagram,
  },
  {
    id: "featureCard-3",
    title: "Pre-built Dashboard Templates",
    descripton:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.",
    image: calendar,
  },
];

export const pricingCards = [
  {
    id: 1,
    product: "Starter",
    userLimit: 3,
    price: 29,
  },
  {
    id: 2,
    product: "Standard",
    userLimit: 20,
    price: 99,
  },
  {
    id: 3,
    product: "Premium",
    userLimit: 200,
    price: 299,
  },
];

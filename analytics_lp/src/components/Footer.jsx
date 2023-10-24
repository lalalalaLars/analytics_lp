import { logobw } from "../assets";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-between mt-20 lg:mr-40 lg:ml-40">
      <img src={logobw} alt="analytics logo" />
      <ul className="flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-roboto font-regular cursor-pointer secondary text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

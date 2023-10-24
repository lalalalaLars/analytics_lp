import { navLinks, signLinks } from "../constants";
import { logocolor } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex px-4 sm:px-8 md:px-16 lg:px-40 py-4 sm:py-6 md:py-8 lg:py-10 justify-between items-center z-10 absolute">
      <img
        className="object-contain w-[184px] h-[40px]"
        src={logocolor}
        alt="logo"
      />
      <ul className="flex  w-full">
        <div className="flex w-full justify-center">
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
        </div>
        <div className="flex w-full justify-end">
          {signLinks.map((sign, index) => (
            <li
              key={sign.id}
              className={`font-roboto font-regular cursor-pointer secondary text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${sign.id}`}>{sign.title}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

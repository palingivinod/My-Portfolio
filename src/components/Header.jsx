import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center w-full px-6 py-4 bg-gradient-to-r from-purple-900 via-pink-700 to-red-600 shadow-2xl text-2xl font-bold tracking-wider transition-all duration-300 ease-in-out flex-wrap sticky top-0 z-50"
    >
      {[
        { to: "home", label: "Home" },
        { to: "education", label: "Education" },
        { to: "projects", label: "Projects" },
        { to: "certifications", label: "Certifications" },
        { to: "publications", label: "Publications" },
        { to: "contact", label: "Contact" }
      ].map((item, index) => (
        <div key={index} className="mx-4 my-2 relative group">
          {item.isPlain ? (
            <span className="text-white opacity-90 group-hover:text-yellow-300 group-hover:scale-110 transform transition-all duration-300">
              {item.label}
            </span>
          ) : (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `transition-all duration-300 transform ${
                  isActive
                    ? "text-yellow-300 scale-125 drop-shadow-lg"
                    : "text-white opacity-90 group-hover:text-yellow-300 group-hover:scale-110"
                }`
              }
            >
              {item.label}
            </NavLink>
          )}
          <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </div>
      ))}
    </div>
  );
};

export default Header;

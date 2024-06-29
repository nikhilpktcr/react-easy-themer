import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const Themer = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const getThemeStyles = () => {
    if (theme === "dark") {
      return { backgroundColor: "black", color: "white" };
    } else {
      return { backgroundColor: "grey", color: "black" };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={getThemeStyles()}>{children}</div>
    </ThemeContext.Provider>
  );
};

Themer.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => useContext(ThemeContext);

export default Themer;

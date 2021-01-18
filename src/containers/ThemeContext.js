import React from "react";
import { createContext, useState } from "react";

const themes = {
  light: {
    background: "#3f51b5",
  },
  dark: {
    background: "#222",
  },
};

const ThemeContext = createContext({
  theme: themes.light,
});

const ThemeColorProvider = (props) => {
  const [bgColor, setBgColor] = useState(themes.light);
  return (
    <ThemeContext.Provider value={[bgColor, setBgColor]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeColorProvider, themes };

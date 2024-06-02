import { createContext, useState } from "react";

export const NavbarContext = createContext({
  isNav: null,
  switchNav: (bool) => null,
});

export const NavbarProvider = ({ children }) => {
  const [isNav, setNav] = useState(true);

  const switchNav = (bool) => {
    setNav(bool);
  };

  const value = { isNav, switchNav };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

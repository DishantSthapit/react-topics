import React from "react";

export type TContext = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
};
export const contextData: TContext = { color: "black", setColor: () => {} };

const ThemeContext = React.createContext(contextData);
export default ThemeContext;

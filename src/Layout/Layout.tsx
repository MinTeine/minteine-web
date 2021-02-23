import * as React from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <CssBaseline />
      <Header />
      {children}
    </div>
  );
};

export default Layout;

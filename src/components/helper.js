import React from "react";

const AuthContext = React.createContext({
  cartLength: 0,
  closeDrawer: false,
});

export default AuthContext;

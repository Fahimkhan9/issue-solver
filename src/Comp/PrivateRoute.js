import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../App";
function PrivateRoute({ children, ...rest }) {
  const [isSignedIn, setIsSignedIn] = useContext(UserContext);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          isSignedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
}

export default PrivateRoute;

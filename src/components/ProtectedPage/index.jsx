// src/ProtectedRoute.js
import React, { useContext } from "react";
import { Route,  Navigate, Outlet, useLocation} from "react-router-dom";

const useAuth=()=>{
  const user=localStorage.getItem('user')
  if(user){
    return true
  } else {
    return false
  }
}

const ProtectedRoute = () => {

  const location = useLocation();
  const currentUser = useAuth();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/login",
        state:{from:location},
      }}
    />
  )
      
    
      
  
};

export default ProtectedRoute;

// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { redirectTo: props.location.pathname },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;

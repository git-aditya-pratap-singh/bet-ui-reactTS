import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";

interface GuardProps {
  children: React.ReactNode;
}

// Guard for ensuring the user is logged in
const IsloginGuard: React.FC<GuardProps> = ({ children }) => {
  //const dispatch = useDispatch();
  const userToken = localStorage.getItem('loginStatus');
  // If no token exists, show login popup and redirect to Home page
  if (!userToken) {
    //dispatch(login_popup(true));
    return <Navigate to="/" />;
  }

  return children;
};

// Guard for ensuring the user is not logged in
const ProtectedRouteGuard: React.FC<GuardProps> = ({ children }) => {
  const isUserToken = localStorage.getItem('loginStatus');
  if (isUserToken) {
    return <Navigate to="/" />;
  }
  return children;
};
export { ProtectedRouteGuard, IsloginGuard };

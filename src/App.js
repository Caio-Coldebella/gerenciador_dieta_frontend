import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './contexts/UserContext';
import useToken from './hooks/useToken';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Hometemporario from './pages/Hometemporario';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <ProtectedRouteGuard>
                <Hometemporario/>
              </ProtectedRouteGuard>}>
              <Route path="/home" element={<Hometemporario/>}/>
              <Route index path="*" element={<Navigate to="/home" />} />
            </Route>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

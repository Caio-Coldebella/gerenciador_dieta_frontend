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
import MainLayout from './pages/MainContent/index';
import Diet from './pages/MainContent/Diet';
import InsertFood from './pages/MainContent/InsertFood';
import PersonalInfo from './pages/MainContent/PersonalInfo';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={
              <ProtectedRouteGuard>
                <MainLayout/>
              </ProtectedRouteGuard>}>
              <Route path="diet" element={<Diet/>}/>
              <Route path="insert-food" element={<InsertFood/>}/>
              <Route path="personal-info" element={<PersonalInfo/>}/>
              <Route index path="*" element={<Navigate to="/home/diet" />} />
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

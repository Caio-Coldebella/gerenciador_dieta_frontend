import Topbar from './Topbar';
import Bottombar from './Bottombar';
import { BODY } from '../../components/Mainlayout';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <Topbar/>
      <BODY>
        <Outlet/>
      </BODY>
      <Bottombar/>
    </>
  );
}

import { Outlet } from 'react-router';
import { Footer } from '../shared/Footer';
import { Navbar } from '../shared/Navbar';

const CommonLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
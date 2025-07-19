import '../App.css';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
const location = useLocation();
  const hideFooterRoutes = ['/lesson'];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);


  return (
  <div className="screen flex flex-col overflow-hidden bg-[rgba(2,14,30,1)] text-white font-pixel">
    <Navbar />
    <main className="flex-1  bg-[rgba(2,14,30,1)]">
      {children}
    </main>
     {!shouldHideFooter && <Footer />}
  </div>
);
};
export default Layout;

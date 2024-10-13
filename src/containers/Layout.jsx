import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

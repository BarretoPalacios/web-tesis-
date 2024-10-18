import Navbar from "./Navbar/Navbar";
import Footer from "./secciones/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1400px] m-auto">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;

import Footer from "./Footer";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"), {
  ssr: false,
});
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "120px" }}>
        <Services />
      </div>

      <Footer />
    </>
  );
}

export default ServicesPage;
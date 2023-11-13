import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Timeline from "../components/ConteudoN1/Timeline";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <section>
        <Timeline />
      </section>
      <Footer />
    </>
  );
}

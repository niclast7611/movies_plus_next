import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MainLayout from "./MainLayout";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      {/* for now its here to style but need a separate page for later */}
      <MainLayout />
      {/* <Footer /> */}
    </div>
  );
}

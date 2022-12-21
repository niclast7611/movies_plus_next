import Footer from "../components/Footer";
import MoviePoster from "../components/MoviePoster";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      {/* for now its here to style but need a separate page for later */}
      <MoviePoster />
      <Footer />
    </div>
  );
}

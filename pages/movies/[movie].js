import MoviePage from "../../components/MoviePage";

function Movie({ result }) {
  return (
    <>
      <MoviePage movieInfo={result} />
    </>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const id = context.query.movie;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIES_API_KEY}&language=en-US`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}

import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
const API_KEY = process.env.API_KEY;

const getMovie = async (movieId) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  return await res.json();
};

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full h-100vh">
      <div className="p-4 md:pt-8 flex md:mt-20 sm:mt-10 flex-col lg:flex-row  items-center content-center max-w-6xl mx-auto md:space-x-6 ">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie poster"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 flex justify-start items-center flex-row">
            <span className="font-semibold mr-1">Rating:</span>
            <FiThumbsUp className="mr-2" /> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

import { ALlMoviesList } from "@/components/CategoryList/AllMoviesList";
import { Hero } from "@/components/Hero";
import { getMovieService } from "@/service/movie.service";

const Home = async () => {
  const movies = await getMovieService();
  return (
    <div>
      <Hero />
      <ALlMoviesList data={movies.payload} />
    </div>
  )
}

export default Home;
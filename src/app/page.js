import { AllActionList } from "@/components/CategoryList/AllActionList";
import { ALlMoviesList } from "@/components/CategoryList/AllMoviesList";
import { Hero } from "@/components/Hero";
import { getActionMovieService, getMovieService } from "@/service/movie.service";
import { Suspense } from "react";

const Home = async () => {
  const movies = await getMovieService();
  const action = await getActionMovieService();
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <ALlMoviesList data={movies.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllActionList data={action.payload} />
      </Suspense>
    </>
  )
}

export default Home; 
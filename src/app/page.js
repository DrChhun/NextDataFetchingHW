export const revalidate = 360;

import { AllActionList } from "@/components/CategoryList/AllActionList";
import { ALlMoviesList } from "@/components/CategoryList/AllMoviesList";
import { Hero } from "@/components/Hero";
import { getCateMovieService, getMovieService } from "@/service/movie.service";
import { Suspense } from "react";
import { AllCrimeList } from "@/components/CategoryList/AllCrimeList";
import { AllDramaList } from "@/components/CategoryList/AllDramaList";
import { AllAnimeList } from "@/components/CategoryList/AllAnimeList";

const Home = async () => {
  const movies = await getMovieService();
  const action = await getCateMovieService("action");
  const anime = await getCateMovieService("anime");
  const drama = await getCateMovieService("drama");
  const hollywood = await getCateMovieService("hollywood");
  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <ALlMoviesList data={movies?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllActionList data={action?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllCrimeList data={hollywood?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllDramaList data={drama?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllAnimeList data={anime?.payload} />
      </Suspense>
    </>
  )
}

export default Home; 
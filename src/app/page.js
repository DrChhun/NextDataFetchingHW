export const revalidate = 360;

import { Hero } from "@/components/Hero";
import { getCateMovieService, getMovieService } from "@/service/movie.service";
import { Suspense } from "react";
import { CategotyList } from "@/components/CategoryList/CategoryList";

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
        <CategotyList title={"All Movies"} data={movies?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <CategotyList title={"Drama Movies"} data={drama?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <CategotyList title={"Hollywood Movies"} data={hollywood?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <CategotyList title={"Action Movies"} data={action?.payload} />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <CategotyList title={"Anime Movies"} data={anime?.payload} />
      </Suspense>
    </>
  )
}

export default Home; 
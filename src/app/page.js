export const revalidate = 360;

import { Hero } from "@/components/Hero";
import { getCateMovieService, getMovieService } from "@/service/movie.service";
import { Suspense } from "react";
import { CategotyList } from "@/components/CategoryList/CategoryList";
import { AllCategotyList } from "@/components/CategoryList/AllCategoryList";

const Home = async () => {
  const movies = await getMovieService();
  const allCate = new Set();
  const arrCate = [];
  movies.payload.filter(x => allCate.add(x.genre))
  allCate.forEach(x => arrCate.push(x));

  return (
    <>
      <Suspense fallback={<h1>Loading</h1>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<h1>Loading</h1>}>
        <AllCategotyList title={"All Movies"} data={movies} />
      </Suspense>
      {/* {arrCate.map(async x => (
        <Suspense fallback={<h1>Loading</h1>}>
          <CategotyList title={`${x} Movies`} data={await getCateMovieService(x)} />
        </Suspense>
      )
      )} */}

      {/* {movies.payload.map(x => (
        <Suspense fallback={<h1>Loading</h1>}>
          <CategotyList title={`${x.genre} Movies`} data={movies} />
        </Suspense>
      ))} */}
      {/* <p>{allCate}</p> */}
      {/* <p className="text-white mb-5">{arrCate.map((x, index) => <span>{index + 1}</span>)}</p> */}
      {arrCate.map((genre, index) => (
        <Suspense key={index} fallback={<h1>Loading</h1>}>
          <CategotyList title={`${genre} Movies`} data={movies.payload.filter(x => x.genre == genre)} />
        </Suspense>
      ))}
    </>
  )
}

export default Home; 
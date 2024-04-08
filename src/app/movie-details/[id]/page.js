import { getMovieByid } from "@/service/movie.service";

const pageDetail = async ({ params }) => {
    const { id } = params;
    const movieData = await getMovieByid(id);
    const data = movieData.payload;
    return (
        <div className="text-white">
            hello detail page = {id}
            <p>{data?.movie_title}</p>
            <p>{data?.director}</p>
            <p>{data?.genre}</p>
        </div>
    )
}

export default pageDetail;
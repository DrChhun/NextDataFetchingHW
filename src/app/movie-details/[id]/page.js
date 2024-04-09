import { getMovieByid } from "@/service/movie.service";

const pageDetail = async ({ params }) => {
    const { id } = params;
    const movieData = await getMovieByid(id);
    const data = movieData.payload;
    return (
        <div className="text-white">
            <img className="w-full h-screen relative" src={data.image == "" ? '/firstimage.jpg' : data.image} alt="" />
            <div className="absolute bottom-0 backdrop-blur-md opacity-50 h-1/4 w-full"></div>
            <div className="h-full w-full bg-gradient-to-t from-black to-transparent absolute top-0">
                <div className="absolute p-32 bottom-0 flex gap-4 justify-between w-full">
                    <div className="space-y-4 w-1/3">
                        <h2 className="text-white font-semibold text-5xl">{data?.movie_title}</h2>
                        <div className="text-sm flex space-x-12">
                            <p>{data?.runtime} minutes</p>
                            <p>{data?.genre}</p>
                            <div>{Math.round(data.rating) == 1 ? "⭐️"
                                : data.rating == 2 ? "⭐️⭐️"
                                    : data.rating == 3 ? "⭐️⭐️⭐️"
                                        : data.rating == 4 ? "⭐️⭐️⭐️⭐️"
                                            : data.rating == 5 ? "⭐️⭐️⭐️⭐️⭐️"
                                                : "⭐️⭐️⭐️⭐️⭐️⭐️"}</div>
                        </div>
                    </div>
                    <div className="space-y-2 w-1/3">
                        <h2 className="font-semibold text-2xl">{data?.director}</h2>
                        <p className="text-sm">Jul 18, 2008, 7:00:00 AM</p>
                        <p className="text-sm line-clamp-6">
                            {data?.description}
                        </p>
                    </div>
                    <div className="flex items-center justify-end w-1/3 space-x-8 cursor-pointer group">
                        <div className="bg-white/50 group-hover:bg-white duration-300 backdrop-blur-xl p-4 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="true" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </div>
                        <p className="semibold text-xl">Play now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default pageDetail;
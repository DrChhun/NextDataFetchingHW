export const getMovieService = async () => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api`)
    const data = await res.json()
    return data;
    // console.log(data, "from function");
}
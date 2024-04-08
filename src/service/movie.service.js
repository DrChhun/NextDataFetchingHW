export const getMovieService = async () => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api`)
    const data = await res.json()
    return data;
}

export const getActionMovieService = async () => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api?genre=action`)
    const data = await res.json()
    return data;
}

export const getMovieByid = async (id) => {
    const res = await fetch(`https://movie-api-295p.vercel.app/api/${id}`)
    const data = await res.json()
    return data;
}
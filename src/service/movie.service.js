export const getMovieService = async () => {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api`)
    const data = await res.json()
    return data;
}

// export const getCateMovieService = async (name) => {
//     const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${name}`)
//     const data = await res.json()
//     return data;
// }

export const getMovieByid = async (id) => {
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`, {
        cache: "no-cache"
    })
    const data = await res.json()
    return data;
}

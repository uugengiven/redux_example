const api_base = `https://api.themoviedb.org/3`
const api_key = ``
const discover_url = `${api_base}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc`
const search_url = `${api_base}/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=`

export async function get_movies() {
    let res = await fetch(discover_url);
    return await res.json();
}

export async function search_movies(search) {
    let res = await fetch(search_url + search);
    console.log(search_url + search);
    return await res.json();
}
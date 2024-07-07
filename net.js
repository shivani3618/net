const ap1 = "api_key=0dfcb538472b4a248392fdaf9ae8532";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests={
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_network=213`,
  fetchActionMovies: `${base_url}/discover/tv?${api}&with_genres=28`,
  fetchComdeyMovies: `${base_url}/discover/tv?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/tv?${api}&with_genres=35`,
  fetchRomanceyMovies: `${base_url}/discover/tv?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/tv?${api}&with_genres=99`,
};
function truncate(str,n){
  return str?.length>n?str.substr(0,n-1)+"...":str;
}
fetch(requests.fetchNetflixOrignals)
.then((res)=>res.join())
.then((data=>{
  console.log(data.results);
  const setMovie=data.results[Math.floor(Math.random()*data.results.length-1)];
  var banner=document.getElementById("banner");
  var banner_tittle=document.getElementById("banner_tittle");
  var banner_desc=document.getElementById("banner_description");
  banner.style.backgroundimage=
  "url("+banner_url+setMovie.backdrop_path+")";
  banner_desc.innerText=truncaate(setMovie.overview, 150);
  banner_tittle.innerText=setMovie.name;
  }));
  fetch(requests.fetchNetflixOrginals)
  .then((res)=>res.json())
  .then((data) => {
    const headdrow=document.getElementById("headrow");
    const row=document.createElement("div");
    row.className="row";
    row.classList.add("netflixrow");
    headdrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row_title";
    title.innerText="NETFLIX ORGINALS";
    row.appendChild(title);
    const row_posters=document.createElement("div");
    row_posters.className="row__posters";
    row.appendChild(row_posters);
    data.results.foreach((movie)=>{
      const poster = document.createElement("img");
      poster.className="row__posterLarge";
      var s=movie.name.replace(/\s+/g,"");
      poster.id=s;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
  fetch(requests.fetchTrending)
  .then((res)=>res.json())
  .then((data)=>{
    const headrow=document.getElementById("headrow");
    const row =document.createElement("div")
    row.className="row";
    headrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row__title";
    title.innerText="top rated";
    row.appendChild(title);
    const row_posters=document.createElement("div");
    roe_posters.className="row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
      
      const poster=document.createElement("img");
      poster.className="row__posterLarge";
      var s2=movie.id;
      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
  fetch(requests.fetchActionMovies)
  .then((res)=>res.json())
  .then((data)=>{
    const headrow=document.getElementById("headrow");
    const row =document.createElement("div")
    row.className="row";
    headrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row__title";
    title.innerText="Action Movies";
    row.appendChild(title);
    const row_posters=document.createElement("div");
    roe_posters.className="row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
      const poster=document.createElement("img");
      poster.className="row__poster";
      var s2=movie.id;
      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
    });
  });
  fetch(requests.fetchComdeyMovies)
  .then((res)=>res.json())
  .then((data)=>{
    const headrow=document.getElementById("headrow");
    const row =document.createElement("div")
    row.className="row";
    headrow.appendChild(row);
    const title=document.createElement("h2");
    title.className="row__title";
    title.innerText="Comdey Movies";
    row.appendChild(title);
    const row_posters=document.createElement("div");
    roe_posters.className="row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
      console.log(movie);
      const poster=document.createElement("img");
      poster.className="row__poster";
      var s2=movie.id;
      poster.id=s2;
      poster.src=img_url+movie.poster_path;
      row_posters.appendChild(poster);
    });
  });


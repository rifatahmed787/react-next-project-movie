import Movie from "./movie";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid ">
        {data.results.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}

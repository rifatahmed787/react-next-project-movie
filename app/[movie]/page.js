import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return data.results.map((movie) => {
    movie: toString(movie.id);
  });
}

export default async function MovieDetails({ params }) {
  const { movie } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return (
    <div>
      <h1 className="text-2xl">{data.title}</h1>
      <h2 className="text-lg">{data.release_date}</h2>
      <h3>Runtime: {data.runtime} minutes</h3>
      <h3 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
        {data.status}
      </h3>
      <Image
        className="my-12 w-full"
        src={imagePath + data.backdrop_path}
        width={1000}
        height={1000}
        priority
      />
      <p>{data.overview}</p>
    </div>
  );
}

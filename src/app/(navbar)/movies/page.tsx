// when a function is async, means it is a serverside componet

import { Movie, MovieResponse } from "@/lib/types/movie";
import { getPosterImage } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";

// because it need to fetch the data from server before data renders
export default async function MoviesPage() {
	const movies: Movie[] = await axios
		.get<MovieResponse>("https://api.themoviedb.org/3/movie/now_playing", {
			params: {
				// api_key: import.meta.env.VITE_TMDB_API_KEY,
				// since we are not in vite. therefore:
				api_key: process.env.TMDB_API_KEY,
				language: "en-US",
				page: 1,
				region: "DE",
			},
		})
		.then((res) => res.data.results);
	console.log(movies);

	return (
		<div className='grid grid-cols-3 gap-3'>
			{movies.map((movie) => (
				<Link
					href={`/movies/${movie.id}`}
					key={movie.id}
				>
					<img
						src={getPosterImage(movie.poster_path)}
						alt={`poster of ${movie.title} movie`}
					/>
				</Link>
			))}
		</div>
	);
}

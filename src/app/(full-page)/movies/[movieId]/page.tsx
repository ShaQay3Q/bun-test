export default function MovieDetailPage({
	params,
}: {
	params: { movieId: string };
}) {
	return (
		<div>
			<span>Movie Details - movie id: {params.movieId}</span>
		</div>
	);
}

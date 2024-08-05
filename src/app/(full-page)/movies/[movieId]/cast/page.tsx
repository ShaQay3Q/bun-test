export default function CasnAndCrewPage({
	params,
}: {
	params: { movieId: string };
}) {
	return (
		<div>
			<span>Cast & Crew - movie id: {params.movieId}</span>
		</div>
	);
}

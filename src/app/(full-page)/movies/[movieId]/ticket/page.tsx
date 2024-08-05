export default function TicketPage({
	params,
}: {
	params: { movieId: string };
}) {
	return (
		<div>
			<span>Ticket - movie id: {params.movieId}</span>
		</div>
	);
}

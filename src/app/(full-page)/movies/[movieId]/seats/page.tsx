export default function BookingSeatsPage({
	params,
}: {
	params: { movieId: string };
}) {
	return (
		<div>
			<span>Booking Seats - movie id: {params.movieId}</span>
		</div>
	);
}

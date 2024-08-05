export default function BookingTimePage({
	params,
}: {
	params: { movieId: string };
}) {
	return (
		<div>
			<span>Booking Time - movie id: {params.movieId}</span>
		</div>
	);
}

export default function AboutMe({ params }: { params: { me: string } }) {
	return (
		<div>
			<span>
				This about me page is about{" "}
				<span className='font-bold'>{params.me}</span>!
			</span>
		</div>
	);
}

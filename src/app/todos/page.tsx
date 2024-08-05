export default async function Todos() {
	// Dan normaly make his prisma quiries here and talks diecty to DB
	const todos = await fetch("https://jsonplaceholder.typicode.com/todos/").then(
		(res) => res.json()
	);

	return (
		<div className='flex flex-col'>
			<span className='font-extrabold text-xl'>Homepage</span>
			<ul className='grid grid-cols-4 gap-4'>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
}

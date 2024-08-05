import Link from "next/link";

export default function Header() {
	return (
		<div>
			<header className='text-red-600 flex gap-3'>
				<span className='font-bold'>Header:</span>
				<Link href={"/"}>Home</Link>
				<Link href={"/about"}>About</Link>
				<Link href={"/contact"}>Contact</Link>
				<Link href={"/count"}>Count</Link>
				<Link href={"/todos"}>Todos</Link>
			</header>
		</div>
	);
}

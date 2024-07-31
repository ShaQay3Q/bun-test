import Link from "next/link";

export default function Header() {
	return (
		<div>
			<header className='text-red-600 flex gap-3'>
				<span className='font-bold'>Header:</span>
				<Link href={"/"}>Home</Link>
				<Link href={"/src/app/about"}>About</Link>
				<Link href={"/src/app/contact"}>Contact</Link>
			</header>
		</div>
	);
}

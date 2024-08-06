import Link from "next/link";

// (navbar) is being ignored/invisible to the router, no app/navbar!
export default function NavBarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// every page we put in NavBar, will have this NavBarLayout
		// (navbar) allowes us to group certain routs and layout them
		// without affecting the other pages
		<div className='flex flex-col gap-4'>
			<nav className='flex gap-6'>
				<Link href='/'>Home</Link>
				<Link href='/movies'>Movies</Link>
				<Link href='/bookmarks'>Bookmarks</Link>
				<Link href='/profile'>Profile</Link>
			</nav>
			{children}
		</div>
	);
}

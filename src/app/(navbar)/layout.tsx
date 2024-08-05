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
		<div>
			{children}
			<nav>NavBar</nav>
		</div>
	);
}

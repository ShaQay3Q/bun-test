// allow us to use hooks and etc.
"use client";

import { useState } from "react";

export default function Home() {
	// !!! this will lead to an error therefore this page which is a client component,
	// supposed to be marked on top that is supposed to be interactive on the client side,
	// mainly because of js (onClick listiner and useState hook, which are iteractive)
	const [count, setCount] = useState(0);
	return (
		<div className='font-extrabold text-xl'>
			<span>Homepage</span>
			<div className='flex flex-col gap-2 ml-6 justify-items-center'>
				<p>{count}</p>
				<div className='flex flex-grow gap-6'>
					<button onClick={() => setCount(count - 1)}>-</button>
					<button onClick={() => setCount(count + 1)}>+</button>
				</div>
			</div>
		</div>
	);
}

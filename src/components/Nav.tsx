import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const navItems = [
	{ title: 'How we work', link: '/', isButton: false },
	{ title: 'Blog', link: '/', isButton: false },
	{ title: 'Account', link: '/', isButton: false },
	{ title: 'View Plans', link: '/', isButton: true },
];

const Nav = ({ menuOpen }: { menuOpen: boolean } = { menuOpen: false }) => {
	const mobileNavClasses =
		'flex flex-col absolute top-[72px] left-0 w-full h-[100vh] px-6 py-8 bg-[#2C2830] overflow-hidden !z-30';

	return (
		<nav
			className={`uppercase md:flex ${
				menuOpen ? mobileNavClasses : 'hidden'
			} md:flex-row md:justify-between items-center text-sm md:space-x-6 space-x-0 md:space-y-0 space-y-6 transition-colors tracking-wide`}
		>
			{navItems.map((item, index) => {
				return item.isButton ? (
					<Link
						key={index}
						className='md:text-black md:hover:text-black text-white transition-colors md:w-auto w-full'
						href='/'
					>
						<Button
							variant='outline'
							className='border-2 md:border-black border-white bg-transparent hover:bg-black hover:border-black rounded-none uppercase font-semibold hover:text-white md:w-auto w-full'
						>
							{item.title}
						</Button>
					</Link>
				) : (
					<Link
						key={index}
						className='md:text-[#837D88] text-white md:hover:text-black hover:text-white transition-colors font-semibold'
						href={item.link}
					>
						{item.title}
					</Link>
				);
			})}

			<div className='absolute -bottom-14 right-0 left-0'>
				<img
					src='/bg-pattern-mobile-nav.svg'
					alt='bg-pattern-mobile-nav'
					className='w-full block md:hidden'
				/>
			</div>
		</nav>
	);
};

export default Nav;

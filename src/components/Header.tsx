'use client';

import Link from 'next/link';
import Nav from './Nav';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setMenuOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header className='md:px-20 px-4 py-4 flex relative justify-between items-center bg-white z-10'>
			<Link className='uppercase font-bold text-xl' href='/'>
				<img src='/logo.svg' alt='logo' />
			</Link>
			<Nav menuOpen={menuOpen} />
			<Button
				variant='outline'
				size='icon'
				className='border-black border-2 rounded-none md:hidden'
				onClick={() => setMenuOpen(!menuOpen)}
			>
				{menuOpen ? <X /> : <Menu />}
			</Button>
		</header>
	);
};

export default Header;

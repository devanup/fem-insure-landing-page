import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const footerLinks = [
	{
		section: 'Our Company',
		links: [
			{ title: 'How we work', href: '/' },
			{ title: 'Why Insure?', href: '/' },
			{ title: 'View Plans', href: '/' },
			{ title: 'Reviews', href: '/' },
		],
	},
	{
		section: 'Help Me',
		links: [
			{ title: 'FAQ', href: '/' },
			{ title: 'Terms of Use', href: '/' },
			{ title: 'Privacy Policy', href: '/' },
			{ title: 'Cookies', href: '/' },
		],
	},
	{
		section: 'Contact',
		links: [
			{ title: 'Sales', href: '/' },
			{ title: 'Support', href: '/' },
			{ title: 'Live Chat', href: '/' },
		],
	},
	{
		section: 'Others',
		links: [
			{ title: 'Careers', href: '/' },
			{ title: 'Press', href: '/' },
			{ title: 'Licenses', href: '/' },
		],
	},
	{
		section: 'Socials',
		links: [
			{ title: 'Facebook', href: '/', icon: 'icon-facebook' },
			{ title: 'Twitter', href: '/', icon: 'icon-twitter' },
			{ title: 'Pinterest', href: '/', icon: 'icon-pinterest' },
			{ title: 'Instagram', href: '/', icon: 'icon-instagram' },
		],
	},
];

const getIcon = (icon: string) => {
	switch (icon) {
		case 'icon-facebook':
			return <img src='/icon-facebook.svg' alt='Facebook' />;
		case 'icon-twitter':
			return <img src='/icon-twitter.svg' alt='Twitter' />;
		case 'icon-pinterest':
			return <img src='/icon-pinterest.svg' alt='Pinterest' />;
		case 'icon-instagram':
			return <img src='/icon-instagram.svg' alt='Instagram' />;
		default:
			return null;
	}
};

const Footer = () => {
	const socialLinks = footerLinks.find(
		(section) => section.section === 'Socials',
	);
	const filteredFooterLinks = footerLinks.filter(
		(section) => section.section !== 'Socials',
	);

	return (
		<footer className=' md:px-20 px-6 py-16 mt-32 relative'>
			<div className='w-full h-full bg-[#fafafa] absolute left-0 top-0 -z-10'></div>
			<div className='absolute top-0 left-0 -z-10'>
				<img
					src='/bg-pattern-footer-desktop.svg'
					alt='bg-pattern-footer-desktop'
					className='w-fit md:block hidden'
				/>
				<img
					src='/bg-pattern-footer-mobile.svg'
					alt='bg-pattern-footer-mobile'
					className='w-fit block md:hidden'
				/>
			</div>

			<header className='flex justify-between border-b-2 pb-6 md:flex-row flex-col md:space-y-0 space-y-10'>
				<img
					src='/logo.svg'
					alt='logo'
					className='md:w-auto object-contain w-28 md:mx-0 mx-auto'
				/>
				<div className='flex justify-evenly md:space-x-4 space-x-0'>
					{socialLinks &&
						socialLinks.links.map((link, index) => (
							<Link key={index} href={link.href}>
								<Button variant='ghost' className='' size='icon'>
									{getIcon(link.icon)}
								</Button>
							</Link>
						))}
				</div>
			</header>

			<section className='flex flex-col md:flex-row justify-between mt-10 md:text-left text-center'>
				{filteredFooterLinks.map((section, index) => (
					<div key={index} className='md:space-y-8 space-y-0'>
						<h3 className='text-lg uppercase font-bold text-gray-500 md:my-0 my-8 '>
							{section.section}
						</h3>
						<ul className='space-y-2'>
							{section.links.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className='text-[#2D2641] uppercase font-semibold hover:underline'
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</footer>
	);
};

export default Footer;

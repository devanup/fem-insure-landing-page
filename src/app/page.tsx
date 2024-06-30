import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { Caesar_Dressing, Karla } from 'next/font/google';
import HowWeWork from '@/components/HowWeWork';
import Footer from '@/components/Footer';

// const karla = Karla({ subsets: ['latin'], weight: '400' });
const karla = Karla({ subsets: ['latin'], weight: ['400', '200'] });

export default function Home() {
	return (
		<main className={`${karla.className} max-w-[1800px] mx-auto`}>
			<Header />
			<Hero />
			{/* <section className='px-20'> */}
			<section className='px-6 md:px-20'>
				<HowWeWork />
			</section>
			<Footer />
		</main>
	);
}

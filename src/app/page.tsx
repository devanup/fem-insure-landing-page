import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { Karla } from 'next/font/google';
import BottomBanner from '@/components/BottomBanner';

const karla = Karla({ subsets: ['latin'], weight: '400' });

export default function Home() {
	return (
		<main className={`${karla.className} max-w-[1800px] mx-auto`}>
			<Header />
			<Hero />
			<section className='px-20'>
				<BottomBanner />
			</section>
		</main>
	);
}

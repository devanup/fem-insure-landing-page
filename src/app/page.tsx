import Hero from '@/components/Hero';
import Header from '@/components/Header';
import { Inter, Karla } from 'next/font/google';

const karla = Karla({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className={`${karla.className} max-w-[1500px] mx-auto`}>
			<Header />
			<Hero />
		</main>
	);
}

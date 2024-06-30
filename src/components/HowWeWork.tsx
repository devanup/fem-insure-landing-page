import { DM_Serif_Display } from 'next/font/google';
import BottomBanner from './BottomBanner';
import Cards from '@/components/Cards';

const serifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
});

const HowWeWork = () => {
	return (
		<section className='md:mt-64 mt-52'>
			<div className='w-40 md:mx-0 mx-auto h-[1px] bg-[#C396C6] mb-12'></div>
			<h1
				className={`text-6xl md:text-left text-center ${serifDisplay.className}`}
			>
				We&apos;re different
			</h1>

			<Cards />
			<BottomBanner />
		</section>
	);
};

export default HowWeWork;

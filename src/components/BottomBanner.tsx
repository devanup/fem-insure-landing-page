import { DM_Serif_Display } from 'next/font/google';

const serifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
});

const BottomBanner = () => {
	return (
		<section className='mt-72'>
			<div className='hidden md:block w-40 h-[1px] bg-[#C396C6] mb-8'></div>
			<h1 className={`text-6xl ${serifDisplay.className}`}>
				We&apos;re different
			</h1>
		</section>
	);
};

export default BottomBanner;

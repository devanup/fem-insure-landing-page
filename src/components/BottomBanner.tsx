import { Button } from './ui/button';
import { DM_Serif_Display } from 'next/font/google';

const serifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
});
export default function BottomBanner() {
	return (
		<div className='w-full md:p-16 p-8 py-16 flex items-center bg-[#2D2641] text-white relative overflow-hidden'>
			<div className='absolute top-0 right-0'>
				<img
					src='/bg-pattern-how-we-work-desktop.svg'
					alt='bg-pattern-how-we-work-desktop'
					className='w-fit md:block hidden'
				/>
				<img
					src='/bg-pattern-how-we-work-mobile.svg'
					alt='bg-pattern-how-we-work-mobile'
					className='w-fit block md:hidden'
				/>
			</div>
			<div className='w-full z-10 flex justify-between items-center md:flex-row flex-col md:space-y-0 space-y-10 md:text-left text-center'>
				<h1
					className={`text-4xl md:w-[40%] w-[100%] ${serifDisplay.className}`}
				>
					Find out more about how we work
				</h1>
				<Button className='w-fit border-2 border-white bg-transparent hover:bg-white rounded-none uppercase font-semibold hover:text-black'>
					How we work
				</Button>
			</div>
		</div>
	);
}

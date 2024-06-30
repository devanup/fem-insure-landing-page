import { Button } from './ui/button';
import { DM_Serif_Display } from 'next/font/google';

const serifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
});

const Hero = () => {
	return (
		<section
			id='hero'
			className='bg-[#2D2641] text-white md:px-20 px-0 h-auto md:h-[45vh] relative'
		>
			{/* top-right pattern svg */}
			<div className='absolute -top-10 right-0'>
				<img
					src='/bg-pattern-intro-right-desktop.svg'
					alt='bg-pattern-intro-right-desktop'
					className='w-80'
				/>
			</div>
			{/* bottom-left pattern svg */}
			<div className='absolute -bottom-80 left-0'>
				<img
					src='/bg-pattern-intro-left-desktop.svg'
					alt='bg-pattern-intro-right-desktop'
					className='w-44'
				/>
			</div>
			{/* hero main content */}
			<div className='flex flex-col-reverse md:flex-row justify-between'>
				{/* hero-left */}
				<div className='flex flex-col md:items-start items-center space-y-6 z-10 md:w-1/2 w-[70%] mx-auto my-20 md:my-28 md:px-0 px-4 md:text-left text-center'>
					<div className='hidden md:block w-40 h-[1px] bg-white mb-8'></div>

					<h1 className={`text-6xl ${serifDisplay.className}`}>
						Humanizing your insurance.
					</h1>
					<p className='font-normal'>
						Get your life insurance coverage easier and faster. We blend our
						expertise and technology to help you find the plan that's right for
						you. Ensure you and your loved ones are protected.
					</p>
					<Button className='w-fit border-2 border-white bg-transparent hover:bg-purple-900 hover:bg-opacity-20 md:hover:bg-white rounded-none uppercase font-semibold hover:text-black'>
						View Plans
					</Button>
				</div>
				{/* hero-right */}
				<div className='flex-shrink-0 md:w-[50%] w-full mx-auto md:mt-28'>
					<img
						className='w-full h-auto'
						src='/image-intro-desktop.jpg'
						alt='image-intro-desktop'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;

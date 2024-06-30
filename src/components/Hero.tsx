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
			// className='bg-[#2D2641] text-white md:px-20 px-0 h-auto md:h-[85vh] xl:h-[60vh] lg:h-[60vh] relative'
			className='bg-[#2D2641] text-white md:px-20 px-0 h-auto relative'
		>
			{/* top-right pattern svg */}
			<div className='absolute -top-10 right-0 hidden md:block'>
				<img
					src='/bg-pattern-intro-right-desktop.svg'
					alt='bg-pattern-intro-right-desktop'
					className='w-80'
				/>
			</div>
			{/* bottom-left pattern svg */}
			<div className='absolute -bottom-80 left-0 hidden md:block'>
				<img
					src='/bg-pattern-intro-left-desktop.svg'
					alt='bg-pattern-intro-right-desktop'
					className='w-44'
				/>
			</div>
			{/* hero main content */}
			<div className='flex flex-col-reverse md:flex-row justify-between'>
				{/* hero-left */}
				<div className='flex flex-col relative md:items-start items-center space-y-6 z-10 md:w-1/2 w-full mx-auto my-0 md:my-24 md:pr-8 md:px-0 px-10 md:py-0 py-24 md:text-left text-center'>
					{/* bg-pattern-intro-left-mobile */}
					<div className='absolute top-0 left-0 -z-10 md:hidden block '>
						<img
							src='/bg-pattern-intro-left-mobile.svg'
							alt='bg-pattern-intro-left-mobile'
							className='w-50'
						/>
					</div>
					{/* bg-pattern-intro-right-mobile */}
					<div className='absolute -bottom-48 right-0 -z-10 md:hidden block '>
						<img
							src='/bg-pattern-intro-right-mobile.svg'
							alt='bg-pattern-intro-right-mobile'
							className='w-50'
						/>
					</div>

					<div className='hidden md:block w-40 h-[1px] bg-white mb-8'></div>

					<h1 className={`lg:text-6xl text-4xl ${serifDisplay.className}`}>
						Humanizing your insurance.
					</h1>
					<p className='font-light'>
						Get your life insurance coverage easier and faster. We blend our
						expertise and technology to help you find the plan that&apos;s right
						for you. Ensure you and your loved ones are protected.
					</p>
					<Button className='w-fit border-2 border-white bg-transparent hover:bg-white rounded-none uppercase font-semibold hover:text-black'>
						View Plans
					</Button>
				</div>
				{/* hero-right */}
				<div className='flex-shrink-0 ml-0 lg:w-[27em] md:w-[55%] w-full mx-auto md:mt-28 relative'>
					<div className='img-wrap md:absolute relative'>
						<img
							className='w-full h-[50vh] md:h-auto object-cover'
							src='/image-intro-desktop.jpg'
							alt='image-intro-desktop'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

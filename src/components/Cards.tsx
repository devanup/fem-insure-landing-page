import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { DM_Serif_Display } from 'next/font/google';

const cardItems = [
	{
		icon: 'icon-snappy-process',
		title: 'Snappy Process',
		description:
			"Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
	},
	{
		icon: 'icon-affordable-prices',
		title: 'Affordable Prices',
		description:
			"We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
	},
	{
		icon: 'icon-people-first',
		title: 'People First',
		description:
			"Our plans aren't full of conditions and clauses to prevent payouts. We make sure you&apos;re covered when you need it.",
	},
];

const serifDisplay = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
});

const Cards = () => {
	return (
		<div className='flex justify-evenly md:space-x-8 md:space-y-0 md:text-left text-center space-y-10 mt-20 mb-32 md:flex-row flex-col '>
			{cardItems.map((card, index) => {
				return (
					<Card key={index} className='border-none shadow-none'>
						<CardHeader className='p-0'>
							<span className='text-4xl text-primary-foreground w-16 mb-6 md:mx-0 mx-auto'>
								<img src={`/${card.icon}.svg`} alt={card.icon} />
							</span>
							<CardTitle className={`${serifDisplay.className} !mb-4`}>
								{card.title}
							</CardTitle>
							<CardDescription>{card.description}</CardDescription>
						</CardHeader>
					</Card>
				);
			})}
		</div>
	);
};

export default Cards;

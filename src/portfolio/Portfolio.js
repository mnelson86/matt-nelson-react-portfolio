import { BackgroundBox } from "../background-box/BackgroundBox";

export const Portfolio = () => {
	return (
		<BackgroundBox>
			<h1 className='pb-3 underline text-sky-500'><strong>Portfolio</strong></h1>
			<p className='text-white'>Click the title to see the deployed site!</p>
			<ul className='grid gap-3 text-center text-white md:grid-cols-3 sm:grid-cols-1'>
				<li className='p-3'>
					<a className='hover:underline hover:text-sky-500' href='https://kellymedia.github.io/find-and-dine/' target='_blank' rel='noreferrer'>Find and Dine</a>
					<div className='flex justify-center'>
						<img className='w-full p-3' src='/find-and-dine.png' alt='find-and-dine'></img>
					</div>
					<p>
						Website that allows a user to search for recipes based on ingredients using the Edamam API.
						For added "flavor", it generates a new, fresh image from the Pexels API on page load!
						Built using HTML, CSS, ands JavaScript.
					</p>
				</li>
				<li className='p-3'>
					<a className='hover:underline hover:text-sky-500' href='https://weather-search-322115.ue.r.appspot.com/' target='_blank' rel='noreferrer'>Weather Search</a>
					<div className='flex justify-center'>
						<img className='w-full p-3' src='/weather-search.png' alt='weather-search'></img>
					</div>
					<p>
						Web App that allows a user to search the weather by name of location using the OpenWeather API. This was built using React.
					</p>
				</li>
				<li className='p-3'>
					<a className='hover:underline hover:text-sky-500' href='https://trinket.io/library/trinkets/dc028b0d2d' target='_blank' rel='noreferrer'>Turtle Race</a>
					<div className='flex justify-center'>
						<img className='w-full p-3' src='/turtle-race.png' alt='turtle-race'></img>
					</div>
					<p>
						Python program that allows a user to guess which colored turtle they think will win the race, then has them move accross the track in random increments until one crosses the line.
					</p>
				</li>
			</ul>
		</BackgroundBox>
	);
}
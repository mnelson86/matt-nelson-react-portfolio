import { BackgroundBox } from "../background-box/BackgroundBox";

export const Interests = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-500'><strong>Interests</strong></h1>
			<p className='p-3 text-white'>
				What tends to interest me the most are things that allow me to see perspectives that are different from my own, things that allow me to grow interesting skills, and adventures.
				Here's a list of some of my personal recommendations and interests:
			</p>
			<ul className='grid gap-3 p-3 text-white md:grid-cols-2 sm:grid-cols-1'>
				<li>
					<p>
						Favorite Book Series:
					</p>
					<a className='underline hover:text-sky-500' href='https://en.wikipedia.org/wiki/The_Dresden_Files' target='_blank' rel='noreferrer'>
						The Dresden Files by Jim Butcher
					</a>
					<p>
						In the genre of Urban Fantasy. This is a very long running running series with nearly 20 books. Rich worlbuilding and well fleshed-out characters that you want to be friends with.
					</p>
				</li>
				<li>
					<p>
						Favorite YouTube Channel:
					</p>
					<a className='underline hover:text-sky-500' href='https://www.youtube.com/@LinusTechTips' target='_blank' rel='noreferrer'>
						Linus Tech Tips
					</a>
					<p>
						A PC hardware Youtube Channel for enthusiasts. A great blend of entertaining and informative.
					</p>
				</li>
				<li>
					<p>
						Favorite Podcast/Vodcast:
					</p>
					<a className='underline hover:text-sky-500' href='https://en.wikipedia.org/wiki/Dimension_20' target='_blank' rel='noreferrer'>
						Dimension 20
					</a>
					<p>
						A Dungeons and Dragons Actual Play Podcast. Quick-witted improv comedians create stories together in the form of playing the Table Top RPG Dungeons and Dragons.
					</p>
				</li>
				<li>
					<p>Favorite Video Game:
					</p>
					<a className='underline hover:text-sky-500' href='https://en.wikipedia.org/wiki/The_Elder_Scrolls_V:_Skyrim' target='_blank' rel='noreferrer'>
						The Elder Scrolls V: Skyrim
					</a>
					<p>
						This is just about the most in-depth Fantasy RPG that has ever been made. One of the best examples of its genre.
					</p>
				</li>
			</ul>
		</BackgroundBox>
	);
}
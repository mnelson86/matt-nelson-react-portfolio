import { BackgroundBox } from "../background-box/BackgroundBox";

export const Home = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-500'><strong>Home</strong></h1>
			<div className='text-white'>
				<p className='pb-2 m-5 text-left'>
					I'm a FullStack Engineer with nearly three years of practical experience.
					I'm driven to deliver quality projects and improve my own skills and knowledge daily.
					I'm outgoing, friendly, and am a good fit in any team.
					<br />
					I have a Bachelor's of Science from Uconn's College of Agriculture
					and am a Graduate of UConn College of Engineering's Full Stack Web Development Boot Camp.
					<br />
					My biggest strengths are my curiousity, ability to communicate, and thoroughness.
					I take action by using my insights to formulate a plan, and work with others to see it through.
					<br />
					A fun fact: I'm technically a Lord through <span>
						<a className='underline hover:text-sky-500' href='https://establishedtitles.com/' target='_blank' rel='noreferrer'>
							established titles
						</a>
					</span>.
					I own 1 square foot of property in Scotland!
				</p>
				<p className='pb-5 m-5 text-left'>I fill my free time with hobbies:
					<br />
					I've been riding horses since I was seven years old, I read fantasy novels, I love hiking and camping, and lately I've been <span className='underline hover:text-sky-500'><a href='https://en.wikipedia.org/wiki/Sabre_(fencing)'>sabre fencing</a></span>.
				</p>
			</div>

		</BackgroundBox>
	);
}
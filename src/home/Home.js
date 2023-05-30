import { BackgroundBox } from "../background-box/BackgroundBox";

export const Home = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-500'><strong>Home</strong></h1>
			<p className='pb-2 m-5 text-left'>I'm a FullStack Engineer with nearly three years of practical experience.
				I'm driven to deliver quality projects and improve my own skills and knowledge daily.
				I'm outgoing, friendly, and fit well in any team.
				<br />
				I have a Bachelor's of Science from Uconn's College of Agriculture
				and am a Graduate of UConn College of Engineering's Full Stack Web Development Boot Camp.
				<br />
				My biggest strengths are my curiousity, ability to communicate, and thoroughness.
				I take action by using my insights to formulate a plan, and work with others to see it through.</p>
			<p className='pb-5 m-5 text-left'>I fill my free time with hobbies:
				<br />
				I've been riding horses since I was seven years old, I read fantasy novels, I love hiking and camping, and lately I've been <span className='underline'>sabre fencing</span>.</p>

		</BackgroundBox>
	);
}
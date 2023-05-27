import { BackgroundBox } from "../background-box/BackgroundBox";

export const Home = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-700'><strong>Home</strong></h1>
			<p className='text-left m-5 pb-2'>I'm a FullStack Engineer with nearly three years of practical experience.
				I'm driven to deliver quality projects and improve my own skills and knowledge daily.
				I'm outgoing, friendly, and fit well in any team. <br />I have a Bachelor's of Science from Uconn's College of Agriculture
				and am a Graduate of UConn College of Engineering's Full Stack Web Development Boot Camp.</p>
			<p className='text-left m-5 pb-5'>I like riding my horse, reading fantasy novels, PC building, camping</p>

		</BackgroundBox>
	);
}
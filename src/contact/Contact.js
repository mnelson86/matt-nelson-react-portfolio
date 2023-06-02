import { BackgroundBox } from "../background-box/BackgroundBox";

export const Contact = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-500'><strong>Contact</strong></h1>
			<p className='m-5 text-center text-white'>If you want to get into contact with me, here are a few ways to do it!</p>
			<br></br>
			<div className='grid gap-3 pb-5 text-white md:grid-cols-2 sm:grid-cols-1'>
				<p>Email: <a className='hover:underline hover:text-sky-500' href='mailto:matthew.p.nelson86@gmail.com'>matthew.p.nelson86@gmail.com</a></p>
				<p>Cell Phone: <a className='hover:underline hover:text-sky-500' href='tel:+18603674601'>(860) 367-4601</a></p>
				<p>GitHub: <a className='hover:underline hover:text-sky-500' href='https://github.com/mnelson86'>https://github.com/mnelson86</a></p>
				<p>LinkedIn: <a className='hover:underline hover:text-sky-500' href='https://www.linkedin.com/in/matthew-nelson-32b5051b0/'>https://www.linkedin.com/in/matthew-nelson-32b5051b0/</a></p>
			</div>
		</BackgroundBox>
	);
}
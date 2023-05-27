import { BackgroundBox } from "../background-box/BackgroundBox";

export const Contact = () => {
	return (
		<BackgroundBox>
			<h1 className='underline text-sky-700'><strong>Contact</strong></h1>
			<p className='text-center m-5'>If you want to get into contact with me there are a few ways to do it!</p>
			<br></br>
			<div className='grid grid-cols-2 pb-5 gap-3'>
				<p>Email: <a className='hover:underline hover:text-sky-500' href='mailto:matthew.p.nelson86@gmail.com'>matthew.p.nelson86@gmail.com</a></p>
				<p>Cell: <a className='hover:underline hover:text-sky-500' href='tel:+18603674601'>(860) 367-4601</a></p>
				<p>GitHub: <a className='hover:underline hover:text-sky-500' href='https://github.com/mnelson86'>https://github.com/mnelson86</a></p>
				<p>LinkedIn: <a className='hover:underline hover:text-sky-500' href='https://www.linkedin.com/in/matthew-nelson-32b5051b0/'>https://www.linkedin.com/in/matthew-nelson-32b5051b0/</a></p>
			</div>
		</BackgroundBox>
	);
}
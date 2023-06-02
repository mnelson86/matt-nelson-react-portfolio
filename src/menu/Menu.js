import { BackgroundBox } from "../background-box/BackgroundBox";

export const Menu = (props) => {
	return (
		<BackgroundBox>
			<div className='grid grid-cols-1 gap-6 p-3 text-white'>
				<div onClick={() => props.setNav('Home')} className='hover:underline'>Home</div>
				<div onClick={() => props.setNav('Skills')} className='hover:underline'>Skills</div>
				<div onClick={() => props.setNav('Portfolio')} className='hover:underline'>Portfolio</div>
				<div onClick={() => props.setNav('Interests')} className='hover:underline'>Interests</div>
				<div onClick={() => props.setNav('Contact')} className='hover:underline'>Contact</div>
			</div>
		</BackgroundBox>
	);
}
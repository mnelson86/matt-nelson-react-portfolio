import { BackgroundBox } from "../background-box/BackgroundBox";

export const Menu = (props) => {
	return (
		<BackgroundBox>
			<div className='grid grid-cols-1 gap-3'>
				<div onClick={() => props.setNav('Home')} className='hover:underline'>Home</div>
				<div onClick={() => props.setNav('Contact')} className='hover:underline'>Contact</div>
			</div>
		</BackgroundBox>
	);
}
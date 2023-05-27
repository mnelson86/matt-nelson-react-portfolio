import React from 'react';

export const BackgroundBox = ({ children }) => {
	return (
		<div className='group bg-opacity-10 bg-sky-400 rounded shadow-md'>
			{children}
		</div>
	);
}
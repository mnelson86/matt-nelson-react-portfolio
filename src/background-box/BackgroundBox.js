import React from 'react';

export const BackgroundBox = ({ children }) => {
	return (
		<div className='rounded shadow-md group bg-opacity-10 bg-sky-400 backdrop-filter backdrop-blur-md'>
			{children}
		</div>
	);
}
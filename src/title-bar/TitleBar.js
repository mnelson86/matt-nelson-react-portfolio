export const TitleBar = () => {
	return (
		<div className='grid grid-cols-3 pb-10 mb-3 text-center shadow-md bg-opacity-70 bg-sky-800 backdrop-filter backdrop-blur-md'>
			<a className='mt-3 hover:underline text-sky-500' href='https://github.com/mnelson86'>GitHub</a>
			<h1 className='mt-3 text-4xl font-semibold tracking-wide text-white'>Matt Nelson</h1>
			<a className='mt-3 hover:underline text-sky-500' href='https://www.linkedin.com/in/matthew-nelson-32b5051b0/'>LinkedIn</a>
		</div>
	)
}
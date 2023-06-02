import { BackgroundBox } from "../background-box/BackgroundBox";

export const Skills = () => {
	return (
		<BackgroundBox>
			<h1 className='mb-3 underline text-sky-500'><strong>Technical Skills</strong></h1>
			<div className='mb-3 ml-5 text-left text-white'>
				I have 3 years of practical FullStack Engineering and Web Development experience.
			</div>
			<p className='pb-3 mb-3 ml-5 text-left text-white'>
				Languages:
				<br />
				<ul className='grid gap-2 text-center md:grid-cols-5 sm:grid-cols-2'>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>TypeScript</li>
					<li>Python</li>
					<li>Java</li>
					<li>SQL</li>
					<li>Lua</li>
					<li>C#</li>
					<li>Business Basic</li>

				</ul>
				{/* JavaScript, HTML, CSS, TypeScript, Python, Java, SQL, NoSQL, Lua, Scratch, C++, and Business
				Basic. */}
				<br />
				Tools:
				<br />
				<ul className='grid gap-2 text-center md:grid-cols-5 sm:grid-cols-2'>
					<li>Web Development</li>
					<li>ReactJS</li>
					<li>AngularJS</li>
					<li>NodeJS</li>
					<li>JSON</li>
					<li>JQuery</li>
					<li>Git (version control)</li>
					<li>Google Cloud Platform</li>
					<li>Kubernetes</li>
					<li>MaterialUI</li>
					<li>Bootstrap</li>
					<li>TailwindCSS</li>
					<li>Angular Material</li>
					<li>Sequelize</li>
					<li>ExpressJS</li>
					<li>Handlebars</li>
					<li>Docker</li>
					<li>Jest</li>
					<li>React Test Library (RTL)</li>
					<li>Jasmine-Marbles</li>
					<li>RXJS</li>
					<li>NgRx</li>
					<li>NX</li>
					<li>VSCode</li>
					<li>Command Line</li>
					<li>Error Log Monitoring</li>
					<li>Twilio</li>
					<li>Trinket.io</li>
					<li>Unity</li>
					<li>Roblox</li>
				</ul>
				{/* Trinket.io, Roblox, Unity, Coggle, DataDog, Twilio,  PowerShell (Command
				Line) */}
			</p>
		</BackgroundBox>
	);
}
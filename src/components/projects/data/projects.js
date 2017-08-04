import image_taskList from '../../../assets/images/tasklist.png';
import image_adSuite from '../../../assets/images/shadsuite.png';
import image_creativeSuite1 from '../../../assets/images/shcreativesuite1.jpg';
import image_creativeSuite2 from '../../../assets/images/shcreativesuite2.jpg';
import image_creativeSuite3 from '../../../assets/images/shcreativesuite3.jpg';
import image_styleguide from '../../../assets/images/styleguide.png';

export const projects = [
	{
		title: 'Task List',
		stack: [
			{ name: 'React', url: 'https://facebook.github.io/react/' },
			{ name: 'LESS', url: 'http://lesscss.org/' },
			{ name: 'Webpack', url: 'https://webpack.github.io/' }
		],
		description: 'This project was built to get familiar with using spread syntax with arrays. It\'s a striaght forward task list that won\'t allow blanks, hooks up to the enter key, has a delete button and editable tasks.',
		images: [image_taskList],
		url: 'http://www.tasklist.mikecgutierrez.com',
		github: 'https://github.com/mikegutierrez/tasklist'

	},
	{
		title: 'SteelHouse Advertising Suite',
		stack: [
			{ name: 'React', url: 'https://facebook.github.io/react/' },
			{ name: 'Redux', url: 'http://redux.js.org/' },
			{ name: 'Node', url: 'https://nodejs.org/' },
			{ name: 'LESS', url: 'http://lesscss.org/' },
			{ name: 'Webpack', url: 'https://webpack.github.io/' }
		],
		description: 'The SteelHouse Advertising Suite is a self service platform for designing and launcing dynamic retargeting advertsing campaigns. I cut my teeth on this project, building out the UI and organzing the application structure with the teams lead engineers. This project tied in our in-house styleguide of react components to maintain code and keep a consistent design standard.',
		images: [image_adSuite],
		url: 'https://steelhouse.com/advertising-suite/'

	},
	{
		title: 'SteelHouse Creative Suite',
		stack: [
			{ name: 'React', url: 'https://facebook.github.io/react/' },
			{ name: 'Redux', url: 'http://redux.js.org/' },
			{ name: 'Node', url: 'https://nodejs.org/' },
			{ name: 'LESS', url: 'http://lesscss.org/' },
			{ name: 'Webpack', url: 'https://webpack.github.io/' }
		],
		description: 'The Creative Suite is software that gives anyone the ability to design retargeting advertising campaigns in minutes. I was invloved in three code basses that make up this product - A2, Creative Libary and Ad Builder. A2 is the front-end XML markup language that SteelHouse ad units are built on. I was responsible for building out tags and coming up with new ways to improve the language. The Creative Library is like the app store for SteelHouse ad units. It holds a collection of templates users can select from. I helped build out the UI and integrate A2 for rendering template previews. The Ad Builder is a WYSIWYG editor for customizing A2 templates. Users can upload their own content from YouTube, Instagram or just about anywhere else they keep it, and use it in their campaigns without writing a line of code. My role in this project ranged from A2 code base changes to product strategy.',
		images: [image_creativeSuite1, image_creativeSuite2, image_creativeSuite3],
		url: 'https://steelhouse.com/creative-suite/'
	},
	{
		title: 'SteelHouse Styleguide',
		stack: [
			{ name: 'React', url: 'https://facebook.github.io/react/' },
			{ name: 'LESS', url: 'http://lesscss.org/' },
			{ name: 'Webpack', url: 'https://webpack.github.io/' }
		],
		description: 'The Styleguide is a react component library built with Less to maintain a consistent code and design standard across SteelHouse apps. It includes buttons, sliders, checkboxes and other commonly used components. Working on this project introduced me to a more organized, utility-class based method of styling apps.',
		images: [image_styleguide],
		url: 'http://styleguide.steelhouse.com/'

	}
];

import image_peerConnect from '../../../assets/images/pc-screen4.png';
import image_taskList from '../../../assets/images/tasklist.jpg';
import image_adSuite from '../../../assets/images/shadsuite2.png';
import image_creativeSuite1 from '../../../assets/images/shcreativesuite1.jpg';
import image_creativeSuite2 from '../../../assets/images/shcreativesuite2.jpg';
import image_creativeSuite3 from '../../../assets/images/shcreativesuite3.jpg';
import image_styleguide from '../../../assets/images/styleguide.png';

export const projects = [
  {
    title: 'PeerConnect',
    stack: [
      { name: 'WebRTC', url: 'https://webrtc.org/' },
      { name: 'Web Sockets', url: 'https://socket.io/' },
      { name: 'Node', url: 'https://nodejs.org/' }
    ],
    description: 'PeerConnect is a decentralized content delivery network solution, bringing the web into a new age of decentralization. This open-source project reduces server load by relying on users to host static content (videos/images). By incorporating a script tag in your HTML and installing the PeerConnect NPM package on the server, the power of P2P is now available.',
    image: image_peerConnect,
    url: 'http://peer-connect.io/',
    github: 'https://github.com/PeerConnect/peer-connect'

  },
  {
    title: 'Hit List',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Node', url: 'https://nodejs.org/' },
      { name: 'Mongo', url: 'https://www.mongodb.com/' },
      { name: 'Phantom.js', url: 'http://phantomjs.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'Live concert listing aggregator built on React, Express, PostgreSQL and Phantom JS.',
    image: image_taskList,
    github: 'https://github.com/mikegutierrez/hit-list'

  },
  {
    title: 'Cryptography',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Redux', url: 'http://redux.js.org/' },
      { name: 'Node', url: 'https://nodejs.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'View your entire crypto-portfolio on one platform. Integrated a web token authentication system to identify users and grant access rights using Redux actions to interface with a backend API to save user account information and portfolio API tokens in an SQL database. Validated registration and login forms by utilizing regular expressions to prevent invalid submissions and React’s component state to conditionally display error messages, providing instant feedback and reducing server responsibilities.',
    image: image_taskList,
    github: 'https://github.com/cryptographyCS/cryptography'

  },
  {
    title: 'Leonidas',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Redux', url: 'http://redux.js.org/' },
      { name: 'Node', url: 'https://nodejs.org/' },
      { name: 'PostgresQL', url: 'https://www.postgresql.org/' },
      { name: 'OAuth', url: 'http://www.passportjs.org/' },
      { name: 'Phantom.js', url: 'http://phantomjs.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'Stock market news resource and data aggregator. Implemented SQL database with relational tables to store stock and user information, maintaining data integrity through type and validity checking. Leveraged OAuth user authentication, integrating secure access to Google’s user resources without sharing credentials. Utilized Phantom.js for headless browser web scraping to save and display dynamic stock information.',
    image: image_taskList,
    github: 'https://github.com/TeamLeonidas/Leonidas'

  },
  {
    title: 'Task List',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Less', url: 'http://lesscss.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'This project was built to familiarize myself with spread syntax and to have some fun styling with CSS. It\’s a straight forward task list with a basic set of requirements, allowing users to create, edit and delete to-do items.',
    image: image_taskList,
    url: 'http://www.tasklist.mikecgutierrez.com',
    github: 'https://github.com/mikegutierrez/tasklist'

  },
  {
    title: 'SteelHouse Advertising Suite',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Redux', url: 'http://redux.js.org/' },
      { name: 'Node', url: 'https://nodejs.org/' },
      { name: 'Less', url: 'http://lesscss.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'The SteelHouse Advertising Suite is a self service platform for launcing dynamic retargeting advertsing campaigns. I cut my teeth on this project, building out the UI from scratch at a fast pace and organzing the application structure with the teams lead engineers. Working on this project was an invaluable experience with countless lessons in product development, engineering, teamwork and business dynamics.',
    image: image_adSuite,
    url: 'https://steelhouse.com/advertising-suite/'

  },
  {
    title: 'SteelHouse Creative Suite',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Redux', url: 'http://redux.js.org/' },
      { name: 'Node', url: 'https://nodejs.org/' },
      { name: 'Less', url: 'http://lesscss.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'The Creative Suite gives anyone the ability to design retargeting advertising campaigns in minutes. I was invloved in three code basses that make up this product: A2, Creative Libary and Ad Builder. A2 is the front end XML markup language that SteelHouse ad units are built on. I was responsible for building out tags and coming up with new ways to improve the language. The Creative Library houses a collection of templates users can select from to get their campaigns started. I helped build out the UI and integrate A2 for rendering template previews. The Ad Builder is a drag and drop editor for customizing A2 templates. Users can upload their own content from YouTube, Instagram or just about anywhere else for use in their campaigns without writing a line of code. My role in this project ranged from A2 code base changes to product strategy.',
    image: image_creativeSuite2,
    url: 'https://steelhouse.com/creative-suite/'
  },
  {
    title: 'SteelHouse Styleguide',
    stack: [
      { name: 'React', url: 'https://facebook.github.io/react/' },
      { name: 'Less', url: 'http://lesscss.org/' },
      { name: 'Webpack', url: 'https://webpack.github.io/' }
    ],
    description: 'The Styleguide is a react component library built with Less to maintain a consistent code and design standard across SteelHouse apps. It includes buttons, sliders, checkboxes and other commonly used components. Working on this project introduced me to a more organized, utility-class based method of styling and building apps.',
    image: image_styleguide,
    url: 'http://styleguide.steelhouse.com/'

  }
];

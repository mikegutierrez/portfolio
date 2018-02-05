import logoPC from '../../../assets/images/logo-PC.png';
import logoSH from '../../../assets/images/logo-SH.png';

export const experience = [
  {
    title: 'Full Stack Software Engineer',
    company: 'PeerConnect',
    dates: '2017 – 2018',
    location: 'Los Angeles, California',
    tasks: [
      'Applied WebRTC to establish real-time, bidirectional connections between clients for the exchange of static assets, relieving server load and reducing bandwidth costs',
      'Implemented Web Sockets to open a connection between active clients and send relevant client data between peers',
      'Designed fold loading and peer-to-peer background-image functionality',
      'Utilized React, React Router, Webpack and Less to build and design peer-connect.io'
    ],
    logo: logoPC

  },
  {
    title: 'Front End Software Engineer',
    company: 'SteelHouse',
    dates: '2016 – 2017',
    location: 'Culver City, California',
    tasks: [
      'Developed reusable React components to build a consistent UI for a retargeting advertisement template library, taking advantage of React’s virtual DOM to conditionally re-render views based on specific state and prop changes',
      'Built out UI for the SteelHouse Advertising Suite, utilizing Redux to maintain a single source of truth for user registration data, advertising budgets and goals, and campaign and template library options, allowing for predictable state management and multiple components to subscribe to the application store',
      'Contributed to a proprietary React component library used across multiple products by developing utility style classes, modular UI components and documentation to ensure the quality and longevity of front end code for other engineers',
      'Improved SteelHouse’s proprietary front end XML based language, A2, by developing features in Coffeescript and React to package Javascript driving UI state changes into language tags, allowing end users to focus on design over functionality',
      'Wrote succinct stylesheets with the Less preprocessor, using variables, mixins and functions for clean style composition',
      'Leveraged Enzyme for shallow rendering and Mocha for asynchronicity to write unit tests for React components to ensure consistent UI display across varying application states based on prop definitions',
      'Implemented the Intercom Javascript library in Node and React, employing API methods and webhooks to monitor user registration and application failure points, allowing customer service to send targeted messages to maintain engagement'
    ],
    logo: logoSH

  },
  {
    title: 'Lead Web Developer',
    company: 'SteelHouse',
    dates: '2014 – 2016',
    location: 'Culver City, California',
    tasks: [
      'Designed an A2 deployment workflow tool by providing senior engineers with functional prototypes using JQuery for DOM manipulation and tracking script injections and Bootstrap for rapid development cycles',
      'Improved A2 by incorporating CSS3 transitions and keyframes with Javascript events for step driven animations',
      'Hired and trained a team of five developers to write functional code to dynamically display relevant products to e-commerce customers in retargeting ad units using SteelHouse’s proprietary language, A2'
    ],
    logo: logoSH

  },
  {
    title: 'Web Developer',
    company: 'SteelHouse',
    dates: 'April 2013 – February 2014',
    location: 'Culver City, California',
    tasks: [
      'Developed retargeting ad units using A2 to display dynamic e-commerce products and CSS to achieve pixel perfect design'
    ],
    logo: logoSH

  }
];

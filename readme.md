# Staff search react application

![Staff search desktop image preview](/staff_capture.webp)

A mock staff search set of components built using hooks and the random user api [randomuser.me](https://randomuser.me/) to supply mock data. 

Demo hosted [here](https://elastic-fermi-f5147b.netlify.app/)

**Functional description**

- On page load, 10 random profiles showing their avatar and name should be listed.
- These profiles can be filtered by their name with the text input.
- When clicking one of the profile items, this will open a modal displaying further information on the user.
- The components are responsive at all screen sizes within chrome.

#Packages 

###[React Loader Spinner](https://www.npmjs.com/package/react-loader-spinner)
Provides a selection of buffer animation components whilst the application loads

###[React-Modal](https://reactcommunity.org/react-modal/) 
This used to display further user information once an individual user had been selected, it also includes support for screen readers once configured.

###[Framer motion](https://www.framer.com/motion/)

An animation library for react with unlimited potential, I've used this for simple hover effects within the User component on each tile.
Below is animated example of the affect achieved.

![Framer motion animation demo](https://i.ibb.co/LJNFkWT/framer-motion.gif)

###[DayJS](https://github.com/devshawn/react-dayjs/blob/master/DOCUMENTATION.md#quick-start)

A very performant alternative to Moment.js for date formating

###[Styled Components](https://styled-components.com/)
An excellent styling solution for component driven development, providing localised & global themes that can be adapted based on props.

![Google Lighthouse report preview](https://ibb.co/nL3zwSG)
[Full Lighthouse report here](https://drive.google.com/file/d/1zq5-QX4Rea_m8nqfLkn8SIpWmKpW6nAk/view?usp=sharing)
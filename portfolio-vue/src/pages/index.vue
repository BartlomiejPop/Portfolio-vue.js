<template>
  <Introduction></Introduction>
  <ProjectContainer
    id="movie-search"
    title="Movie Search"
    description="Application based on choosing a movie created by the group of programmers. App component with Public and Private routes, AuthPage page logic. Connected to Google's Firebase database"
    projectUrl="https://michalmazurdev.github.io/team-project-filmoteka/index.html"
    githubUrl="https://github.com/BartlomiejPop/team-project-filmoteka"
    backgroundImage="../../assets/moviesearchBg.jpg"
    projectImage="../../assets/moviesearch.jpg"
    highlightColor="#dfac58"
    nextProject="so-yummy"
    :technologies="['firebase', 'git', 'javascript', 'sass']"
  ></ProjectContainer>
  <ProjectContainer
    id="so-yummy"
    title="So Yummy"
    description="Recipe cookbook application. Backend made in node.js. Routes described in Express. Multer implemented to work with files.Data saved in mongoDb database. Frontend made in React and Redux. Authentication logic. Private and public routes.Pages linked to particular routes."
    projectUrl="https://bartlomiejpop.github.io/So-Yummy-frontend/"
    githubUrl="https://github.com/BartlomiejPop/So-Yummy-frontend"
    backgroundImage="../../assets/soYummyBg.jpg"
    projectImage="../../assets/soYummy.jpg"
    highlightColor="#65bb65"
    nextProject="circles"
    :technologies="['mongo', 'git', 'node', 'javascript', 'sass']"
  ></ProjectContainer>
  <ProjectContainer
    id="circles"
    title="Circles"
    description="Game based on clicking circles in a short time that is constantly decreasing. Click on the special circles to extend time before they expire. Live database actualizing and displaying top 10 records."
    projectUrl="https://bartlomiejpop.github.io/circles-ranking/"
    githubUrl="https://github.com/BartlomiejPop/circles-ranking"
    backgroundImage="../../assets/circlesBackground.png"
    projectImage="../../assets/circles.jpg"
    highlightColor="rgb(191, 51, 206)"
    nextProject="weather-app"
    :technologies="['mongo', 'git', 'node', 'javascript', 'sass']"
  ></ProjectContainer>
  <ProjectContainer
    id="weather-app"
    title="Weather App"
    description="Weather application created with Vite and React. Project architecture made in redux-toolkit. Code written in typescript and styled with SCSS. Application provides weather live data in chosen locations. All changes are saved in local storage."
    projectUrl="https://bartlomiejpop.github.io/weather-app-ts-project/"
    githubUrl="https://github.com/BartlomiejPop/weather-app-ts-project"
    backgroundImage="../../assets/weatherAppBg.jpg"
    projectImage="../../assets/weatherApp.jpg"
    highlightColor="rgb(76, 92, 243)"
    nextProject="phonebook"
    :technologies="['react', 'sass', 'javascript']"
  ></ProjectContainer>
  <ProjectContainer
    id="phonebook"
    title="Phonebook"
    description="Single page application based on React-router. Project built with Redux toolkit architecture and lazy-loaded components. Authentication system. Props strongly described using prop-types. Styled with Material UI and css modules."
    projectUrl="https://bartlomiejpop.github.io/weather-app-ts-project/"
    githubUrl="https://github.com/BartlomiejPop/weather-app-ts-project"
    backgroundImage="../../assets/phonebookBg.jpg"
    projectImage="../../assets/phonebook.jpg"
    highlightColor="rgb(255, 255, 255)"
    nextProject="mongodb-contactbook"
    :technologies="['react', 'javascript']"
  ></ProjectContainer>
  <ProjectContainer
    id="mongodb-contactbook"
    title="MongoDb Contactbook"
    description="Rest API application developed with Express.js and MongoDB database. Authentication system. Endpoints described to allow managing actions on particular contacts"
    projectUrl="https://github.com/BartlomiejPop/REST-API-application"
    githubUrl="https://github.com/BartlomiejPop/REST-API-application"
    backgroundImage="../../assets/contactbookBg.jpg"
    projectImage="../../assets/contactbookBg.jpg"
    highlightColor="rgb(255, 255, 255)"
    nextProject="wallet-app"
    :technologies="['node', 'mongo', 'javascript']"
  ></ProjectContainer>
  <ProjectContainer
    id="wallet-app"
    title="Wallet App"
    description="Cash managment app developed by group of programmers. Authentication system with private routes and MongoDB database. Made using React toolkit and Node.js Express framework."
    projectUrl="https://bartlomiejpop.github.io/Wallet-App/"
    githubUrl="https://github.com/BartlomiejPop/Wallet-App"
    backgroundImage="../../assets/walletappBg.jpg"
    projectImage="../../assets/walletapp.jpg"
    highlightColor="rgb(255, 255, 255)"
    nextProject="ice-cream"
    :technologies="['node', 'mongo', 'javascript', 'react', 'git']"
  ></ProjectContainer>
  <ProjectContainer
    id="ice-cream"
    title="Ice Cream"
    description="Simple project developed in a group of programmers. Workflow done in agile, everyday Scrum meetings and merging every member's git branches."
    projectUrl="https://kamild90.github.io/projekt-grupa-3/"
    githubUrl="https://github.com/KamilD90/projekt-grupa-3"
    backgroundImage="../../assets/icecreamBg.png"
    projectImage="../../assets/icecream.jpg"
    highlightColor="rgb(255, 255, 255)"
    :technologies="['javascript', 'git', 'sass']"
    :isLastProject="true"
  ></ProjectContainer>
</template>

<script lang="ts" setup></script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <Introduction></Introduction>
  <ProjectContainer
    id="movie-search"
    title="Movie Search"
    description="Application based on choosing a movie created by the group of programmers. App component with Public and Private routes, AuthPage page logic. Connected to Google's Firebase database"
    projectUrl="https://michalmazurdev.github.io/team-project-filmoteka/index.html"
    githubUrl="https://github.com/BartlomiejPop/team-project-filmoteka"
    backgroundImage="../../public/assets/moviesearchBg.jpg"
    projectImage="../../public/assets/moviesearch.jpg"
    nextProject="so-yummy"
    :technologies="['firebase', 'git', 'javascript', 'sass']"
  ></ProjectContainer>
  <ProjectContainer></ProjectContainer>
</template>

<script lang="ts" setup></script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

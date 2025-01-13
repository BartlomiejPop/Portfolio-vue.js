<script>
import LinesBackground from "./LinesBackground.vue";
import NextProject from "./NextProject.vue";
import Technologies from "./Technologies.vue";
</script>
<template>
  <div style="height: 100vh; position: relative" id="introduction">
    <LinesBackground></LinesBackground>
    <div
      style="
        padding-top: 5rem;
        display: flex;
        justify-content: center;
        gap: 5rem;
      "
    >
      <div>
        <img width="20%" src="../assets/photo.jpg" />
        <p style="font-size: 3rem">Bartłomiej Poprawa</p>
        <p style="width: 50rem; font-size: 1.1rem">
          I’m organized and motivated person, interested in web development.
          With practical experience as fullstack developer, frontend developer
          and with strong university background I am ready to face professional
          expectations. During my work and studies, I was involved in developing
          several different applications, using React.js, Node.js, Nest.js and
          TypeScript.
        </p>
      </div>
      <div style="display: flex; flex-direction: column">
        <a href="https://github.com/BartlomiejPop" target="_blank">
          <v-icon
            class="ma-2 opacity-1"
            color="white"
            icon="mdi-github"
            size="150"
          ></v-icon>
        </a>
        <a
          href="https://www.linkedin.com/in/bart%C5%82omiej-poprawa-961397247/"
          target="_blank"
        >
          <v-icon
            class="ma-2 opacity-1"
            color="white"
            icon="mdi-linkedin"
            size="150"
          ></v-icon>
        </a>
      </div>
    </div>
    <p class="tech-stack-title">Tech Stack:</p>
    <div class="d-flex justify-space-around w-100">
      <Technologies
        :technologies="[
          'react',
          'node',
          'vue',
          'nest',
          'typescript',
          'mongo',
          'git',
          'firebase',
          'sass',
          'javascript',
        ]"
        :isIntroduction="true"
      ></Technologies>
    </div>
    <div style="position: absolute; bottom: 0">
      <NextProject
        :isIntroduction="true"
        nextProject="movie-search"
      ></NextProject>
    </div>
  </div>
</template>

<style>
.tech-stack-title {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2%;
}
</style>

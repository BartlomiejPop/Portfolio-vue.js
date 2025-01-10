<script setup>
defineProps({
  title: String,
  description: String,
  projectUrl: String,
  githubUrl: String,
  backgroundImage: String,
  projectImage: String,
  technologies: [],
});
</script>

<template>
  <div style="height: 100vh; position: relative">
    <div class="project-container">
      <v-card class="mx-auto d-block" width="50%">
        <div class="project-image-wrapper">
          <v-img
            class="project-image"
            height="400px"
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            cover
          ></v-img>
        </div>
        <v-card-title> Top western road trips </v-card-title>
        <div style="display: flex; cursor: pointer; align-items: center">
          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he
            could deliver. You won't have time for sleeping, soldier, not with
            all the bed making you'll be doing. Then we'll go with that data
            file! Hey, you add a one and two zeros to that or we walk! You're
            going to do his laundry? I've got to find a way to escape.
          </v-card-text>
          <v-icon
            class="ma-3 opacity-1"
            color="#fff"
            icon="mdi-github"
            size="80"
          ></v-icon>
        </div>
      </v-card>
      <div class="d-flex justify-space-around w-50">
        <Technologies></Technologies>
      </div>
    </div>
    <div style="position: absolute; bottom: 0">
      <NextProject></NextProject>
    </div>
  </div>
</template>

<style>
.project-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-image {
  transition: scale 0.3s ease;
}

.project-image:hover {
  scale: 1.2;
  cursor: pointer;
}

.project-image-wrapper {
  overflow: hidden;
}
</style>

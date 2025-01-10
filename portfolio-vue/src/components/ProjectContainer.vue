<template>
  <div :id="id" style="height: 100vh; position: relative">
    <div
      class="project-container"
      :style="{ '--background-image': `url(${backgroundImage})` }"
    >
      <div class="project-wrapper">
        <v-card class="mx-auto d-block" width="50%">
          <div class="project-image-wrapper">
            <a :href="projectUrl" target="_blank">
              <v-img
                class="project-image"
                height="400px"
                :src="projectImage"
                cover
              ></v-img>
            </a>
          </div>
          <v-card-title> {{ title }} </v-card-title>

          <div style="display: flex; cursor: pointer; align-items: center">
            <v-card-text>
              {{ description }}
            </v-card-text>
            <a :href="githubUrl" target="_blank">
              <v-icon
                class="ma-3 opacity-1"
                color="#fff"
                icon="mdi-github"
                size="80"
              ></v-icon>
            </a>
          </div>
        </v-card>
        <div class="d-flex justify-space-around w-50">
          <Technologies :technologies="technologies"></Technologies>
        </div>
      </div>
    </div>
    <div style="position: absolute; bottom: 0">
      <NextProject></NextProject>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  title: String,
  description: String,
  projectUrl: String,
  githubUrl: String,
  backgroundImage: String,
  projectImage: String,
  nextProject: String,
  technologies: Array,
});
</script>

<style>
.project-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.project-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--background-image); /* Użycie zmiennej CSS */
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: 0.5;
  z-index: 1;
}

.project-wrapper {
  z-index: 2;
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

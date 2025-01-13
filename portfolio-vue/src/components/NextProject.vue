<script setup>
const props = defineProps({
  nextProject: String,
  isIntroduction: { type: Boolean, required: false },
  isLastProject: { type: Boolean, required: false },
});
</script>

<template>
  <a
    :href="'#' + props.nextProject"
    style="text-decoration: none; scroll-behavior: smooth"
  >
    <div class="next-project">
      <v-icon
        color="black"
        icon="mdi-menu-down"
        size="x-large"
        class="mx-16"
      ></v-icon>
      <span class="next-project-title" v-if="isIntroduction">My Projects</span>
      <span class="next-project-title" v-else>Next Project</span>
      <v-icon
        color="black"
        icon="mdi-menu-down"
        size="x-large"
        class="mx-16"
      ></v-icon>
    </div>
  </a>
</template>

<style>
.next-project {
  padding: 1rem 0;
  text-align: center;
  display: inline-block;
  width: 100vw;
  background-color: rgb(201, 200, 200, 0.5);
  cursor: pointer;
}

.next-project:hover {
  background-color: rgb(201, 200, 200, 0.7);
}

.next-project-title {
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
}
</style>

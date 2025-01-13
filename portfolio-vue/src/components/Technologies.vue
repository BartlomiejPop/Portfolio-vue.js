<script setup>
defineProps({
  technologies: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => typeof item === "string"),
  },
  isIntroduction: { type: Boolean, required: false },
});
const technologyIcon = {
  react: "mdi-react",
  vue: "mdi-vuejs",
  javascript: "mdi-language-javascript",
  typescript: "mdi-language-typescript",
  sass: "mdi-sass",
  node: "mdi-nodejs",
  nest: "mdi-nodejs",
  firebase: "mdi-firebase",
  mongo: "mdi-database-outline",
  git: "mdi-git",
};
</script>

<template>
  <div v-for="technology in technologies" class="icon-wrapper">
    <v-icon
      class="ma-2 opacity-1"
      color="#212121"
      :icon="technologyIcon[technology]"
      size="70"
    ></v-icon>
    <p v-if="isIntroduction">{{ technology }}</p>
  </div>
</template>

<style>
.icon-wrapper {
  margin-top: 2rem;
  background-color: rgba(207, 206, 206, 0.3);
  border: 3px solid rgb(69, 69, 69);
  border-radius: 12px;
  text-align: center;
}
</style>

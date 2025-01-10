<script setup>
defineProps({
  technologies: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => typeof item === "string"),
  },
});
const technologyIcon = {
  react: "mdi-react",
  vue: "mdi-vue.js",
  javascript: "mdi-language-javascript",
  sass: "mdi-sass",
  node: "mdi-nodejs",
  firebase: "mdi-firebase",
  mongo: "mdi-database-outline",
  git: "mdi-git",
};
</script>

<template>
  <div v-for="n in 5" class="icon-wrapper">
    <v-icon
      class="ma-2 opacity-1"
      color="indigo"
      icon="mdi-react"
      size="70"
    ></v-icon>
  </div>
</template>

<style>
.icon-wrapper {
  margin-top: 2rem;
  background-color: rgba(174, 174, 174, 0.3);
  border: 2px solid rgb(69, 69, 69);
  border-radius: 12px;
  text-align: center;
}
</style>

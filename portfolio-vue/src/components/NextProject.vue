<template>
  <div class="next-project">
    <v-icon
      color="black"
      icon="mdi-menu-down"
      size="x-large"
      class="mx-16"
    ></v-icon
    ><span class="next-project-title"> Next Project</span>
    <v-icon
      color="black"
      icon="mdi-menu-down"
      size="x-large"
      class="mx-16"
    ></v-icon>
  </div>
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
}
</style>

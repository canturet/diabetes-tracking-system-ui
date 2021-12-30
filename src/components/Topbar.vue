<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="indigo">
    <div class="dashboard">
      <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Topbar",
};
</script>
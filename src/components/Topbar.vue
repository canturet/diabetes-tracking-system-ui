<template>
  <v-app-bar app elevate-on-scroll elevation="3" color="#71DFE7">
    <div class="dashboard">
      <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    </div>
    <v-spacer />
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#009DAE" dark v-bind="attrs" v-on="on"> Can Türet </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text"   router
        :to="link.route">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      links: [
        { icon: "mdi-test-tube", text: "Test Yap", route: "/test" },
        {
          icon: "mdi-format-list-bulleted",
          text: "Sonuçları Görüntüle",
          route: "/result",
        },
        { icon: "mdi-logout", text: "Çıkış Yap", route: "/logout" },
      ],
    };
  },
};
</script>
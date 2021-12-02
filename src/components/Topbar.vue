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
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
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
      items: [
        { title: "Test Yap", link: "test" },
        { title: "Sonuçları Görüntüle", link: "result" },
        { title: "Çıkış Yap", link: "logout" },
      ],
    };
  },
};
</script>
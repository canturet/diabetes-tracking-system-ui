<template>
  <v-app id="inspire">
    <v-div v-if="true">
      <Sidebar :drawer="drawer" />
      <Topbar @drawerEvent="drawer = !drawer" />
      <v-main style="background: #f5f5f540">
        <v-container class="py-8 px-6" fluid>
          <router-view></router-view>
        </v-container>
        <Footer @drawerEvent="drawer = !drawer" />
      </v-main>
    </v-div>
    <v-div v-if="false">
      <router-view></router-view>
    </v-div>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Topbar, Sidebar, Footer },
  data: () => ({
    drawer: null,
  }),
  methods: {},
};
</script>
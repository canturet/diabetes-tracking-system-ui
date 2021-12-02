<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
      height="140"
      class="pa-4"
      src="https://images.pexels.com/photos/6941883/pexels-photo-6941883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <div class="text-center">
        <h2 class="white--text">Diyabet Takip Sistemi</h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
        active-class="border"
      >
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      links: [
        { icon: "mdi-home", text: "Anasayfa", route: "/" },
        {
          icon: "mdi-account-multiple-plus",
          text: "Kayıt Ol",
          route: "/register",
        },
        { icon: "mdi-login", text: "Giriş Yap", route: "/login" },
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
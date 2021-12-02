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
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
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
        ["mdi-home", "Anasayfa"],
        ["mdi-account-multiple-plus", "Kayıt Ol"],
        ["mdi-login", "Giriş Yap"],
        ["mdi-test-tube", "Test Yap"],
        ["mdi-format-list-bulleted", "Sonuçları Görüntüle"],
        ["mdi-logout", "Çıkış Yap"],
      ],
    };
  },
};
</script>
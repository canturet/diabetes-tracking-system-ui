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
      <v-list-item to="/" active-class="border">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Anasayfa</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/register" active-class="border" v-show="!isAuthenticated">
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-plus</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Kayıt Ol</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/login" active-class="border" v-show="!isAuthenticated">
        <v-list-item-icon>
          <v-icon>mdi-login</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Giriş Yap</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/test" active-class="border" v-show="isAuthenticated">
        <v-list-item-icon>
          <v-icon>mdi-test-tube</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Test Yap</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item to="/result" active-class="border" v-show="isAuthenticated">
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Sonuçları Görüntüle</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="logoutClass()" v-show="isAuthenticated">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Çıkış Yap</v-list-item-title>
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
      isAuthenticated : false,
    };
  },
  created : function() {
    if(localStorage.getItem('token')){
      this.isAuthenticated=true;
    }
  },
  methods: {
    logoutClass() {
      localStorage.removeItem("token");
      localStorage.removeItem("username")
      this.$router.replace("/login");
      window.location.reload();
    },
  },
};
</script>
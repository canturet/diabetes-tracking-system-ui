<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <h2 class="indigo--text">Giriş Yap</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordShow ? 'text' : 'password'"
                label="Şifre"
                placeholder="Şifre"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">GİRİŞ YAP</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    loading: false,
    snackbar: false,
    passwordShow: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email alanı zorunludur.",
      (v) => /.+@.+\..+/.test(v) || "Email adresi geçersiz.",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Şifre alanı zorunludur.",
      (v) => (v && v.length >= 6) || "Şifre minimum 6 karakterden oluşmalıdır.",
    ],
  }),
  methods: {
    submitHandler() {
      this.$refs.form.validate();
    },
  },
};
</script>
<style>
.backgruond {
  background-image: url(../assets/Order-Banner.jpg) !important;
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
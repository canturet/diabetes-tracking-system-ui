<template>
  <v-app>

 
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-5">
          <div class="text-center">
            <h2 class="indigo--text">Giriş Yap</h2>
          </div>

          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-alert
                dense
                outlined
                icon="mdi-account"
                :value="controlAlertError"
                color="red"
              >
                Giriş bilgileriniz geçersiz.
              </v-alert>
              <v-text-field
                v-model="username"
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

  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data: () => ({
    username: "",
    controlAlertError: false,
    loading: false,
    snackbar: false,
    passwordShow: false,
    showingButtons: false,
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
      const vm = this;
      axios
        .post("http://localhost:8081/api/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          vm.controlAlertError = false;
          self.response_key = response.data.result;
          console.log(response.data)
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          vm.$router.push("/");
          window.location.reload();
        })
        .catch(function () {
          vm.controlAlertError = true;
        });
    },
  },
};
</script>
<style>
.backgruond {
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
</style>
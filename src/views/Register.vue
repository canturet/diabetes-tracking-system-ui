<template>
  <v-app>
    <v-col cols="10" lg="4" class="mx-auto">
      <v-card class="pa-4">
        <div class="text-center">
          <h2 class="indigo--text">Kayıt Ol</h2>
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
              Bu email adresi kullanımda.
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
              <span class="white--text px-8">KAYIT OL</span>
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
    loading: false,
    snackbar: false,
    passwordShow: false,
    controlAlertError: false,
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
        .post("http://localhost:8081/api/auth/register", {
          username: this.username,
          password: this.password,
        })
        .then(function (response) {
          vm.controlAlertError = false;
          self.response_key = response.data.result;
          localStorage.setItem("token", response.data.token);
          vm.$router.push("/");
          window.location.reload();
        })
        .catch(function () {
          vm.controlAlertError = true;
        });
      localStorage.setItem("username", this.username);
    },
  },
};
</script>

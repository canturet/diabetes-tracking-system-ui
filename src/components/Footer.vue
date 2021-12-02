<template>
  <v-footer  app bottom fixed padless inset>
    <v-card class="flex" flat tile color="#71DFE7" :elevation="10">
      <v-card-text class="py-2 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
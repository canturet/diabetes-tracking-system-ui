<template>
  <div class="dashboard">
    <v-carousel
      cycle
      height="440"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-col>
      <v-row>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>

          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
        <v-card class="mx-auto mt-3" max-width="300">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
          <v-card-title> Top western road trips </v-card-title>
          <v-card-actions>
            <v-btn color="#009DAE" text> Görüntüle </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>
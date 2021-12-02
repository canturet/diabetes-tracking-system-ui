<template>
  <div>
    <v-row>
      <v-col md="4">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-select
            v-model="diabetesType"
            :items="items"
            :rules="[(v) => !!v || 'Diyabet tipini seçmeniz zorunludur.']"
            label="Diyabet Tipi"
            required
          ></v-select>
          <v-text-field
            v-if="diabetesType"
            v-model="bloodPressure"
            :rules="nameRules"
            label="Tansiyon"
            required
            type="number"
          ></v-text-field>
          <v-text-field
            v-if="diabetesType"
            v-model="pulse"
            :rules="nameRules"
            label="Nabız"
            required
            type="number"
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="#009DAE"
            class="white--text mt-5"
            @click="validate"
          >
            Gönder
          </v-btn>
        </v-form>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col md="8" v-if="isSuccess">
        <v-text-field
          value="Yüksek"
          label="Sonuç"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          value="12 - 16"
          label="Olması Gereken Tansiyon Aralığı"
          outlined
          readonly
        ></v-text-field>
        <v-text-field
          value="70 - 90"
          label="Olması Gereken Nabız Aralığı"
          outlined
          readonly
        ></v-text-field>
        <v-alert border="left" color="#009DAE" dark>
          Geçmiş sonuçlarınızı görmek için
          <a
            style="text-decoration: none; color: inherit"
            href="/result"
            target="_blank"
            ><strong>tıklayın</strong></a
          >.
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSuccess: false,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Bu alan zorunludur."],
    select: null,
    items: ["Tip 1", "Tip 2", "Gebelik"],
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.diabetesType && this.bloodPressure && this.pulse) {
        this.isSuccess = true;
      }
    },
  },
};
</script>
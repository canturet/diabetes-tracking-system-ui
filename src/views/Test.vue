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
            v-model="glucose"
            :rules="nameRules"
            label="*Glikoz Değeri (mg/dl)"
            required
            type="number"
          ></v-text-field>
           <v-text-field
            v-if="diabetesType"
            v-model="diastolicBloodPressure"
            label="Küçük Tansiyon Değeri (mmHg)"
            type="number"
          ></v-text-field>
           <v-text-field
            v-if="diabetesType"
            v-model="highBloodPressure"
            label="Büyük Tansiyon Değeri (mmHg)"
            type="number"
          ></v-text-field>
          <v-btn
            :disabled="!valid"
            color="indigo"
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
          v-model="result"
          value="Yüksek"
          label="Sonuç"
          outlined
          readonly
          color="red"
        ></v-text-field>
        <v-text-field
          value="80 - 120"
          label="Olması Gereken Glikoz Değeri Aralığı"
          outlined
          readonly
        ></v-text-field>
        <div v-if="glucose2 > 120">
          <v-text-field
            v-model="glucose2"
            label="Glikoz Değeriniz"
            outlined
            readonly
          ></v-text-field>
          <v-alert border="left" color="red lighten-2" dark>
            Doktorunuzun tavsiye ettiği insülini veya ilacınızı
            kullanın. Daha önce kontrole gitmediyseniz, en yakın sağlık
            kurumuna başvurun.
          </v-alert>
        </div>
        <div v-if="80 >= glucose2 && glucose2 > 50">
          <v-text-field
             v-model="glucose2"
            label="Glikoz Değeriniz"
            outlined
            readonly
          ></v-text-field>
          <v-alert border="left" color="red lighten-2" dark>
            Öğününüzü tüketin. Diyabet tanısı aldıysanız hipoglisemi (3 yemek
            kaşığı vişne veya elma suyu, tanesiz ve tortusuz içilecek)
            protokolünü uygulayın. 15 dakika sonra tekrar ölçüm yapın. Ölçüm
            sonucunda glikoz aralığı 50-80 arasında çıkarsa acile başvurun.
          </v-alert>
        </div>
        <div v-if="50 >= glucose2">
          <v-text-field
            v-model="glucose2"
            label="Glikoz Değeriniz"
            outlined
            readonly
          ></v-text-field>
          <v-alert border="left" color="red lighten-2" dark>
            Yutkunma, göz kırpma, görme kaybı, hareketlerde ve algıda yavaşlama,
            üşüme veya refleks kaybı yaşanıyorsa acilen ambulansı arayın. Ayrıca
            3 yemek kaşığı tatlı meyve suyu için.
          </v-alert>
        </div>
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
import axios from "axios";
export default {
  data: () => ({
    result: null,
    glucose: null,
    glucose2: null,
    isSuccess: false,
    valid: true,
    name: "",
    nameRules: [(v) => !!v || "Bu alan zorunludur."],
    select: null,
    items: ["Tip 1", "Tip 2", "Gebelik"],
    username:"",
    diastolicBloodPressure:"",
    highBloodPressure:"",
    diabetesType:"",
  }),
  created() {
    this.username=localStorage.getItem('username');
  },
  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.diabetesType && this.glucose) {
        this.isSuccess = true;
        if (this.glucose > 120) {
          this.result = "Çok Yüksek";
          this.glucose2 = this.glucose;
        } else if (120 >= this.glucose && this.glucose > 80) {
          this.result = "Normal";
           this.glucose2 = this.glucose;
        } 
        else if (80 >= this.glucose && this.glucose > 50) {
          this.result = "Düşük";
           this.glucose2 = this.glucose;
        } else if (50 > this.glucose) {
          this.result = "Çok Düşük";
           this.glucose2 = this.glucose;
        }
      }

      const vm = this;
      console.log(vm)
      axios
        .post("http://localhost:8081/api/test/createTest", {
          username:this.username,
          diabetesType: this.diabetesType,
          glucose: this.glucose,
          diastolicBloodPressure: this.diastolicBloodPressure,
          highBloodPressure: this.highBloodPressure,
          result:this.result
        })
        .then(function () {
         
        })
        .catch(function () {});
    },
  },
};
</script>
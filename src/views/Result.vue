<template>
  <v-data-table
    :headers="headers"
    :items="results"
    return-object
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Sonuçlarım</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Diyabet Tipi',
          align: 'start',
          value: 'diabetesType',
        },
        { text: 'Glikoz Değeri', value: 'glucose' },
        { text: 'Küçük Tansiyon', value: 'diastolicBloodPressure' },
        { text: 'Büyük Tansiyon', value: 'highBloodPressure' },
        { text: 'Sonuç', value: 'result' },
        { text: 'Tarih', value: 'createdDate' },
        { text: 'İşlem', value: 'actions', sortable: false },
      ],
      results:[],
      username:"",
      editedIndex:Number,
    }),
    created () {
      this.username=localStorage.getItem('username');
      
      const vm = this;
    console.log(vm);
    axios
      .get("http://localhost:8081/api/test/getTestsByUserId/" + this.username)
      .then(function (response) {
        response.data.forEach((value) => {
          vm.results.push(value);
        });
        console.log(vm.results)
        
       



      })
      .catch(function () {});
    },
    methods: {
     deleteItem (item) {
         const vm2 = this;
      axios
        .delete(
          "http://localhost:8081/api/test/deleteTest/" +
            item.id,
          {}
        )
        .then(function () {
          vm2.$router.go(0);
        })
        .catch(function () {});
     
      }
    
   
    },
  }
</script>
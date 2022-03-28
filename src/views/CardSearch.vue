<template>
  <div class="pa-5">
    <h1>Card search</h1>
    <v-row>
      <v-col cols="4">
        <v-text-field outlined type="text" v-model="search" placeholder="Search..."></v-text-field>
      </v-col>
      <v-col cols="8" class="px-4">
        <v-range-slider
          v-model="range"
          :max="max"
          :min="min"
          hide-details
          class="align-center"
        >
          <template v-slot:prepend>
            <v-text-field
              :value="range[0]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 100px"
              @change="$set(range, 0, $event)"
            ></v-text-field>
          </template>
          <template v-slot:append>
            <v-text-field
              :value="range[1]"
              class="mt-0 pt-0"
              hide-details
              single-line
              type="number"
              style="width: 100px"
              @change="$set(range, 1, $event)"
            ></v-text-field>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>

    <div class="mt-10 d-flex justify-space-around">
      <v-card v-for="home in filteredHomes" :key="home.address">
        <v-img class="white--text align-end" height="200" :src="home.image">
          <v-card-title class=" white--text">
            {{ home.postcode }}
          </v-card-title>
        </v-img>
        <v-card-text>
          <span><span class="font-weight-bold">Address:</span> {{home.address}}</span>
          <p><span class="font-weight-bold">Price:</span> £{{home.price}}</p> 
        </v-card-text>
      </v-card>
    </div>

  </div>  
</template>

<script>
export default {
  data() {
    return {
      search: '',
      min: 50000,
      max: 10000000,
      range: [50000, 9000000],
      homes: [
        {
          address: '10 Downing Street',
          postcode: 'SE1 4JS',
          price: 8500000,
          image: 'https://picsum.photos/200/300'
        },
        {
          address: '10 Dogfield Road',
          postcode: 'CF11 1RS',
          price: 450000,
          image: 'https://picsum.photos/200/300?greyscale'
        },
        {
          address: '14 Cathays Terrance',
          postcode: 'CF12 7NC',
          price: 250000,
          image: 'https://picsum.photos/200/300?blur'
        },
        {
          address: 'The Farmers Ranch',
          postcode: 'SA3 2F4',
          price: 750000,
          image: 'https://picsum.photos/200/300?random=1'
        },
        {
          address: '33 Oystermouth Roud',
          postcode: 'SA7 5ST',
          price: 660000,
          image: 'https://picsum.photos/200/300?random=2'
        },
      ]
    }
  },
  computed: {
    filteredHomes() {
        return this.filteredBySearch
    },
    filteredBySearch() {
      return this.filteredByPrice.filter(home => {
        return home.address.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 || 
          home.postcode.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 
      })
    },
    filteredByPrice() {
      return this.homes.filter(home => {
          return home.price >= this.range[0] && home.price <= this.range[1] 
      })
    }
  }
}
</script>

<style>

</style>
<template>
  <div>
    <v-container >
      <h2>Whatsapp link for mobile</h2>
      <h4>Enter mobile number with country code</h4>
      <div class="mb-10">
        <span>
          <v-icon color="red">mdi-close</v-icon>55667744
        </span>
        <br>
        <span>
          <v-icon color="red">mdi-close</v-icon>004455667744
        </span>
        <br>
        <span>
          <v-icon color="red">mdi-close</v-icon>+4455667744
        </span>
        <br>
        <span>
          <v-icon color="green">mdi-check</v-icon>4455667744
        </span>
      </div>

      <div class="mt-8" style="width: 250px;">
        <v-text-field
          label="Enter a mobile number"
          v-model="mobileNumber"
          outlined
          placeholder="e.g 55667744"
        ></v-text-field>    
      </div>
      <v-btn @click="openLink" color="success" x-large>
        <v-icon left>mdi-whatsapp</v-icon>
        Start chat
      </v-btn>

      <v-divider class="my-8"></v-divider>

      <div class="mt-8" style="width: 250px;">
        <v-select
          outlined
          :items="countryCodes"
          v-model="selectedCode"
          label="Country coude"
        ></v-select>
        <v-text-field
          label="Enter a mobile number"
          v-model="mobileNumber2"
          outlined
          placeholder="e.g 55667744"
        ></v-text-field>    
      </div>
      <v-btn @click="openLink2" color="blue" class="white--text" x-large>
        <v-icon left>mdi-whatsapp</v-icon>
        Start chat
      </v-btn>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNumber: '',
      mobileNumber2: '',
      selectedCode: '',
      countryCodes: ['44', '47', '39']
    }
  },
  methods: {
    openLink() {
      window.open(`https://wa.me/${this.mobileNumber}`, "_blank");    
    },
    openLink2() {
      window.open(`https://wa.me/${this.returnNumber}`, "_blank");    
    }
  },
  computed: {
    returnNumber() {
      return `${this.selectedCode}${this.mobileNumber2}`
    }
  }
}
</script>

<style>

</style>
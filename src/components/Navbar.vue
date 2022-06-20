<template>
  <div>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title @click="goHome" class="title"
        >Vue.js Playground</v-toolbar-title
      >

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/ClaudioVR/vue-playground"
        target="_blank"
        color=""
        dark
        depressed
      >
        <span>by Claudio Rescigno</span>
        <v-icon right>mdi-github</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.title {
  cursor: pointer;
}
</style>

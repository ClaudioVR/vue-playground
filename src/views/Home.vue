<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <span class="display-1 mt-10">Claude's Vue.js playground</span>
        </v-row>
        <v-container>
          <div class="mt-8 d-flex justify-space-around">
            <v-card
              v-for="project in projects"
              :key="project.name"
              flat
              class="blue item-card"
              dark
            >
              <v-card-text class="text-center">
                <v-icon size="80">{{ project.icon }}</v-icon>
                <p class="text-h6 white--text">{{ project.name }}</p>
                <p>{{ project.description }}</p>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      projects: [
        {
          name: "Drag Coach",
          description: "",
          icon: "mdi-soccer",
        },
        {
          name: "DOC creator",
          description: "",
          icon: "mdi-file-document",
        },
        {
          name: "Signature",
          description: "",
          icon: "mdi-pen",
        },
        {
          name: "Flex Fun",
          description: "",
          icon: "mdi-view-grid-plus",
        },
        {
          name: "Draggable grid",
          description: "",
          icon: "mdi-gesture-tap",
        },
        {
          name: "Infinite scroll",
          description: "",
          icon: "mdi-infinity",
        },
      ],
    };
  },
};
</script>

<style scoped>
.item-card {
  flex-basis: 180px;
}
</style>

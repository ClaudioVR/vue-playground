<template>
  <div class="home">
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <div class="text-center">
            <p class="text-h3 mt-10">Claude's Vue.js playground</p>
            <p class="text-h6 font-weight-light">
              Putting Vue.js plugins to work
            </p>
          </div>
        </v-row>
        <v-container>
          <div class="mt-8 d-flex justify-space-around">
            <v-card
              v-for="project in projects"
              :key="project.name"
              flat
              class="blue item-card"
              dark
              @click.stop="reRoute(project.link)"
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
          description:
            "Drag players onto the field to design your perfect formation!",
          icon: "mdi-soccer",
          link: "/dragdrop",
        },
        {
          name: "DOC creator",
          description:
            "Dynamically edit a pre prepared document and download it.",
          icon: "mdi-file-document",
          link: "/doc-creator",
        },
        {
          name: "Signature",
          description: "Pick a colour and sign away your fortunes.",
          icon: "mdi-pen",
          link: "/signature",
        },
        {
          name: "Flex Fun",
          description:
            "Who knew flex could be so much fun. Hover over a card and see!",
          icon: "mdi-view-grid-plus",
          link: "/flexbox",
        },
        {
          name: "Draggable grid",
          description:
            "Don't like your new dashboard? Drag it apart and save it!",
          icon: "mdi-gesture-tap",
          link: "/draggrid",
        },
        {
          name: "Infinite scroll",
          description:
            "Twitter style infinite scroll. Cos who's got anything better to do? ",
          icon: "mdi-infinity",
          link: "/infinite",
        },
      ],
    };
  },
  methods: {
    reRoute(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.item-card {
  flex-basis: 180px;
}
</style>

<template>
  <div>
    <v-divider class="my-3"></v-divider>
    <v-btn class="mx-1" @click="reset" color="success">Reset grid</v-btn>
    <v-btn
      v-if="itemsAreDraggable"
      class="mx-1"
      @click="itemsAreDraggable = false"
      color="primary"
      outlined
    >
      <v-icon left>mdi-lock</v-icon>
      Lock grid
    </v-btn>
    <v-btn
      v-if="!itemsAreDraggable"
      class="mx-1"
      @click="itemsAreDraggable = true"
      color="primary"
      outlined
    >
      <v-icon left>mdi-lock-open</v-icon>
      Unlock grid
    </v-btn>
    <v-container class="mt-5 grey lighten-4">
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="itemsAreDraggable"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          class="pa-3"
          :class="item.color"
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          <span class="body-1 white--text">{{ item.i }}: </span>
          <span class="headline white--text">{{ item.name }}</span>
        </grid-item>
      </grid-layout>
    </v-container>
  </div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
  },
  data() {
    return {
      itemsAreDraggable: true,
      names: ["Alpha", "Beta", "Gamma", "Delta", "Zeta"],
      layout: [
        {
          x: 0,
          y: 0,
          w: 4,
          h: 2,
          i: "0",
          color: "green",
          name: "Unreconciled payments",
        },
        {
          x: 0,
          y: 2,
          w: 4,
          h: 4,
          i: "1",
          color: "red",
          name: "Rent and Income graph",
        },
        {
          x: 4,
          y: 0,
          w: 8,
          h: 6,
          i: "2",
          color: "blue",
          name: "Outgoing payments",
        },
        { x: 0, y: 3, w: 4, h: 4, i: "3", color: "yellow", name: "Tenants" },
        { x: 4, y: 4, w: 4, h: 4, i: "4", color: "pink", name: "Landlords" },
        {
          x: 8,
          y: 5,
          w: 4,
          h: 4,
          i: "5",
          color: "orange",
          name: "Contractors",
        },
        { x: 4, y: 6, w: 8, h: 4, i: "6", color: "purple", name: "Income" },
        { x: 0, y: 7, w: 4, h: 6, i: "7", color: "grey", name: "Properties" },
        {
          x: 0,
          y: 8,
          w: 4,
          h: 3,
          i: "8",
          color: "teal lighten-2",
          name: "Tenancy rent collection table",
        },
        {
          x: 4,
          y: 5,
          w: 8,
          h: 18,
          i: "9",
          color: "light-blue lighten-2",
          name: "Insights",
        },
      ],
    };
  },
  methods: {
    reset() {
      // console.log(localStorage.originalGrid)
      this.layout = JSON.parse(localStorage.originalGrid);
      // this.layout = localStorage.originalGrid
    },
  },
  created() {
    localStorage.originalGrid = JSON.stringify(this.layout);
  },
  beforeDestroy() {
    localStorage.removeItem("originalGrid");
  },
};
</script>

<style></style>

<template>
  <div>
    <v-carousel 
      class="mt-12"
      vertical-delimiters 
      vertical 
      v-model="model"
      :continuous="continuous"
    >
      <v-carousel-item
        v-for="(color, i) in colors"
        :key="color"
        v-touch="{
          up: () => swipe('Up'),
          down: () => swipe('Down')
        }"
      >
        <v-sheet
          :color="color"
          height="100%"
          tile
        >
          <v-row
            @wheel="onWheel"
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">Form input {{ i + 1 }}
              <v-row class="mt-3">
                <v-col cols="6">
                  <v-text-field
                    label="First name"
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Surname"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>


    <v-row class="my-10" justify="space-around">
      <v-btn @click="model--" color="success" outlined>
        <v-icon >mdi-minus</v-icon>
      </v-btn>
      Form input {{ model + 1 }} of 5
      <v-btn @click="model++" color="success" outlined>
        <v-icon >mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import _ from 'lodash'

  export default {
    data () {
      return {
        continuous: false,
        colors: [
          'primary',
          'secondary',
          'yellow darken-2',
          'red',
          'orange',
        ],
        model: 0,
      }
    },
    methods: {
      onWheel: _.debounce(function(e) {
        if(e.deltaY > 0) {
          this.model++
        } else {
          this.model--
        }
        console.log(e.deltaY)
        }, 160, {
          'leading': true,
          'trailing': false
      }),
      swipe(direction) {
        if(direction === "Up") {
          this.model++
        } else {
          this.model--
        }
      }
    }
  }
</script>
<template>
  <v-container grid-list-xs>
    <h3>Search Component</h3>
    <v-text-field 
      @input="isTyping = true" 
      v-model="searchQuery" 
      type="text"
      placeholder="Type something"
      >
    </v-text-field>
    <p>{{searchQuery}}</p>
  </v-container>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
    searchQuery: "",
    isTyping: false,
    searchResult: [],
    }
  },
   watch: {
    searchQuery: _.debounce(function() {
      this.isTyping = false;
      console.log('isTyping = false')
    }, 1000),
    isTyping: function(value) {
      if (!value) {
        console.log('Typing has stopped')
      }
    }
  },
}
</script>

<style>

</style>
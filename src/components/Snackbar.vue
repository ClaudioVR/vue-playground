<template>
  <div class="text-center ma-2">
    <v-snackbar
      color="green"
      v-model="snackbarDialog" :timeout="timeout" 
    >
      {{ text }}
      <v-btn
        color="red"
        outlined
        @click="closeSnackbar"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    props: ['snackbarDialog', 'text', 'timeout'],
    data() {
      return {
      }
    },
    methods: {
      closeSnackbar() {
        this.$emit('closeSnackbar')
      }
    },
    watch: {
      snackbarDialog(value) {
        if(!value) {
          this.closeSnackbar()
        }
      }
    }
  }
</script>
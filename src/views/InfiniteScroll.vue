<template>
  <div>
    <v-container >
      <v-card 
        class="my-3 " 
        v-for="item in users" :key="item.id"
        data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
      >
        <v-card-title class="light-blue lighten-2 white--text" primary-title>
          {{ item.title}}
        </v-card-title>
        <v-card-text class="pt-3">
          {{ item.body }}
        </v-card-text>
      </v-card>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </v-container>

  </div>
</template>

<script>
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'infinite',
  components: {
    InfiniteLoading,
  },
  data() {
    return {
      users: '',
      distance: 1000,
      direction: 'bottom',
      start: 0,
      limit: 5
    }
  },
  created() {
    AOS.init()
},
  methods: {
    infiniteHandler($state) {
      console.log('loading more!')
      axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${this.start}&_limit=5`)
        .then(res => {
          this.start += 5
          if(this.start >= 50) {
            $state.complete()
          } else {
            console.table(res.data)
            const newData = res.data
            const newArray = [ ...this.users, ...newData ]
            this.users = newArray
            $state.loaded();
          }

        })

    },
    // fetchData() {
    //   axios.get('https://jsonplaceholder.typicode.com/users/?_start=0&_limit=5')
    //   .then(res => {
    //     // console.log(res)
    //     this.users = res.data
    //   })
    // }
  },
  watch: {

  }
}
</script>

<style>

</style>
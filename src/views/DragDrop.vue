<template>
  <div class="d-flex flex-column align-center mt-12">
    <div class="draggable-wrapper">
      <div class="field">
        <div class="top-area"></div>
        <div class="top-area-small"></div>
        <div class="bottom-area"></div>
        <div class="bottom-area-small"></div>
        <div class="center-circle">
          <div class="center-point"></div>
        </div>
        <div class="center-line"></div>
      </div>
      <vue-draggable-resizable class-name="playerA"
        v-for="(x, index) in 11" :key="index" :x="-50" :y="170" :w="0" :h="0" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="player">{{x}}</div>
      </vue-draggable-resizable>
      <vue-draggable-resizable class-name="playerB"
        v-for="(y, index) in 11" :key="index + 100" :y="300" :x="-50" :w="0" :h="0" @dragging="onDrag" @resizing="onResize" :parent="true">
        <div class="player2">{{y}}</div>
      </vue-draggable-resizable>
    </div>
  </div>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  components: {
    VueDraggableResizable
  },
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>

<style>
.draggable-wrapper {
  height: 90vh;  
  width: 80vw; 
  border: 1px solid white; 
  position: relative;
  
}
.player {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}

.player2 {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
}


.field {
  height: 85%;  
  width: 100%; 
  background-color: green;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-area {
  border: 3px solid white;
  height: 100px;
  width: 75%;
  position: absolute;
  top: -3px;
}
.top-area-small {
  border: 3px solid white;
  height: 40px;
  width: 100px;
  position: absolute;
  top: -3px;
}
.bottom-area {
  border: 3px solid white;
  height: 100px;
  width: 75%;
  position: absolute;
  bottom: -3px;
}
.bottom-area-small {
  border: 3px solid white;
  height: 40px;
  width: 100px;
  position: absolute;
  bottom: -3px;
}

.center-circle {
  height: 130px;
  width: 130px;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-point {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: white;
}

.center-line {
  height: 3px;
  width: 100%;
  background-color: white;
  position: absolute;
}

@media screen and (min-width: 768px) {
  .center-circle {
    height: 170px;
    width: 170px;
  }
}
</style>
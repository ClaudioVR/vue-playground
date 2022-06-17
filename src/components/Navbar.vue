<template>
  <div>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Vue.js Playground</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn color="primary" dark link to="/"
          ><v-icon>mdi-home</v-icon></v-btn
        >
        <v-btn color="primary" dark link to="/dragdrop">Drag</v-btn>
        <v-btn color="primary" dark link to="/doc-creator">Docx</v-btn>
        <v-btn color="primary" dark link to="/signature">Sign</v-btn>
        <v-btn color="primary" dark link to="/flexbox">Flex</v-btn>
        <v-btn color="primary" dark link to="/draggrid">Draggrid</v-btn>
        <v-btn color="primary" dark link to="/infinite">Infinite</v-btn>
        <v-btn color="primary" dark link to="/osdashboard">OsDb</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {};
</script>

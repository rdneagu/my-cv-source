<template>
  <div id="app">
    <Sidebar></Sidebar>
    <router-view class="page" />
    <Tooltip></Tooltip>
  </div>
</template>

<script>
import Sidebar from './modules/Sidebar.module.vue';
import Tooltip from './modules/Tooltip.module.vue';

export default {
  components: { Sidebar, Tooltip },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700|Titillium+Web:400,500,600,700&display=swap');
@import '@/scss/_normalize';
@import '@/scss/_mixins';

a {
  text-decoration: none !important;
  color: $color-cyan;
  cursor: pointer;
  @include transition('color, text-shadow', .15s, linear);
  &:hover:not(.icon):not(.button) {
    color: lighten($color-cyan, 20%);
    text-shadow: 0 0 1px $color-cyan !important;
  }
}
html, body, #app {
  min-height: 100vh;
  background-color: black;
}
#app {
  display: grid;
  grid-template: "sidebar page" 100% / 350px 1fr; // Shorthand: "area-name" row-size / column-size
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-cyan;
  text-shadow: 1px 1px 1px black;

  .page {
    grid-area: page;
    background: darken($color-cyan, 44%);
  }
}
</style>

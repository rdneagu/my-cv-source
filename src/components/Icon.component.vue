<template>
  <router-link v-if="name && href && !disabled" :to="href" class="icon-wrapper">
    <img v-if="img" :src="getImage" :class="[ getIcon ]" />
    <i v-else class="icon" :class="[ getIcon, isPointer ]"></i>
  </router-link>
  <div v-else-if="name" class="icon-wrapper" :class="[ isDisabled ]" @click.stop="OnIconClick">
    <img v-if="img" :src="getImage" :class="[ getIcon ]" />
    <i v-else class="icon" :class="[ getIcon, isPointer ]"></i>
  </div>
</template>

<script>
export default {
  props: ['name', 'disabled', 'click', 'href', 'img'],
  computed: {
    isDisabled() {
      return this.disabled ? 'disabled' : false;
    },
    isPointer() {
      return this.click || this.href ? 'pointer' : false;
    },
    getImage() {
      // return require(`@/assets/images/${this.img}.png`); // eslint-disable-line
      return undefined;
    },
    getIcon() {
      return `icon-${this.name}`;
    },
  },
  methods: {
    OnIconClick() {
      if (this.disabled || typeof (this.click) !== 'function') return false;
      return this.click();
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'my-cv-icon';
  src:
    url('../assets/fonts/icons/my-cv-icon.ttf?6f15b0') format('truetype'),
    url('../assets/fonts/icons/my-cv-icon.woff?6f15b0') format('woff'),
    url('../assets/fonts/icons/my-cv-icon.svg?6f15b0#my-cv-icon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'my-cv-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-mysql:before {
  content: "\e90a";
}
.icon-amazonaws:before {
  content: "\e900";
}
.icon-javascript:before {
  content: "\e901";
  color: #f7df1e;
}
.icon-java:before {
  content: "\e902";
}
.icon-linux:before {
  content: "\e903";
}
.icon-python:before {
  content: "\e904";
}
.icon-html5:before {
  content: "\e905";
  color: #e34f26;
}
.icon-css3:before {
  content: "\e906";
  color: #1572b6;
}
.icon-react:before {
  content: "\e907";
}
.icon-vuejs:before {
  content: "\e908";
  color: #4fc08d;
}
.icon-nodejs:before {
  content: "\e909";
  color: #393;
}
</style>

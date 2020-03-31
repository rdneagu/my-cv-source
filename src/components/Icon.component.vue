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
@import '~@/scss/_mixins';

@font-face {
  font-family: 'my-cv-icon';
  src:
    url('../assets/fonts/icons/my-cv-icon.ttf?kfbnlq') format('truetype'),
    url('../assets/fonts/icons/my-cv-icon.woff?kfbnlq') format('woff'),
    url('../assets/fonts/icons/my-cv-icon.svg?kfbnlq#my-cv-icon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'my-cv-icon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include transition(color, .2s, ease);
  &.pointer:hover {
    color: lighten($color-cyan, 20%);
    cursor: pointer;
  }
}

.icon-play:before {
  content: "\e918";
}
.icon-pause:before {
  content: "\e919";
}
.icon-user:before {
  content: "\e976";
}
.icon-business:before {
  content: "\e90d";
}
.icon-clipboard:before {
  content: "\e916";
}
.icon-star:before {
  content: "\e915";
}
.icon-alert:before {
  content: "\e914";
}
.icon-email:before {
  content: "\e90e";
}
.icon-phone:before {
  content: "\e90f";
}
.icon-location:before {
  content: "\e910";
}
.icon-calendar:before {
  content: "\e911";
}
.icon-bitbucket:before {
  content: "\e912";
}
.icon-linkedin:before {
  content: "\e913";
}
.icon-git:before {
  content: "\e90b";
  color: #f05032;
}
.icon-github:before {
  content: "\e90c";
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
}
.icon-nodejs:before {
  content: "\e909";
  color: #339933;
}
</style>

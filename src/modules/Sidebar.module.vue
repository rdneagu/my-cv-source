<template>
  <section class="sidebar">
    <svg class="corner" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon class="left-triangle" points="0 0, 100 0, 0 75" />
    </svg>
    <div class="avatar-wrapper">
      <div class="avatar"></div>
    </div>
    <div class="name-wrapper">
      <span class="name first-name">Robert</span>
      <span class="name last-name">Neagu</span>
    </div>
    <div class="role">Full-Stack Web Developer</div>
    <transition @enter="panelEnter" @leave="panelLeave" mode="out-in" appear>
      <component :is="panels[0]" key="panel"></component>
    </transition>
    <Icon class="animation-control"
      :name="`${getInterval ? 'pause' : 'play'}`"
      :click="toggleInterval.bind()"
      v-tooltip="{ text: 'Toggle the sidebar animation' }"></Icon>
  </section>
</template>

<script>
import Velocity from 'velocity-animate';

import Icon from '@/components/Icon.component.vue';
import ContactPanel from '@/components/panels/Contact.panel.vue';
import SkillsPanel from '@/components/panels/Skills.panel.vue';

export default {
  components: { Icon },
  data() {
    return {
      panels: [ContactPanel, SkillsPanel],
      interval: null,
    };
  },
  mounted() {
    this.toggleInterval();
  },
  computed: {
    getInterval() {
      return !!this.interval;
    },
  },
  methods: {
    panelEnter(el, done) {
      el.style.opacity = 0;
      Velocity(el, { opacity: 1 }, { easing: 'swing', duration: 400, complete: done });
    },
    panelLeave(el, done) {
      Velocity(el, { opacity: 0 }, { easing: 'swing', duration: 400, complete: done });
    },
    switchPanel() {
      this.panels.push(this.panels.shift());
    },
    toggleInterval() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
      } else {
        this.switchPanel();
        this.interval = setInterval(this.switchPanel, 10000);
      }
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  background: linear-gradient(90deg, darken($color-cyan, 34%) -20%, darken($color-cyan, 40%));
  border-right: 1px solid darken($color-cyan, 32%);

  .animation-control {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 32px;
  }

  > [class$='panel'] {
    opacity: 0;
  }
  /**
    * SVG Shape behind avatar
    */
  > .corner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 350px;
    .left-triangle { fill: darken($color-cyan, 32%); }
  }

  /**
    * Avatar
    */
  > .avatar-wrapper {
    position: relative;
    padding: 4px;
    border: 2px solid $color-cyan;
    border-radius: 100%;
    margin: 30px 0;
    .avatar {
      height: 150px;
      width: 150px;
      background: url(../assets/avatar.jpg) center top / 200%;
      border-radius: inherit;
    }
  }

  /**
    * Name
    */
  > .name-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    .name {
      margin: 0 6px;
      font-size: 2.5em;

      &.last-name {
        font-weight: 700;
      }
    }
  }

  /**
    * Role
    */
  > .role {
    position: relative;
    margin: 10px 0 20px 0;
    padding: 5px 40px;
    font-size: 1em;
    background-color: darken($color-cyan, 40%);
    &:before, &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background-color: $color-cyan;
    }
    &:before {
      top: 0;
      border-bottom: 2px solid darken($color-cyan, 40%);
    }
    &:after {
      bottom: 0;
      border-top: 2px solid darken($color-cyan, 40%);
    }
  }
}
</style>

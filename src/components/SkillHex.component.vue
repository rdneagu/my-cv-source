<template>
  <div class="skill-wrapper">
    <svg class="skill-hex-svg" width="100%" viewBox="-10 -10 320 300">
      <polygon class="hex-progress" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      <polygon class="hex-bg" points="300,150 225,280 75,280 0,150 75,20 225,20" :style="{ strokeDasharray: getStrokePositionCSS }"></polygon>
    </svg>
    <label class="skill-name-wrapper">
      <span :id="getCamelCaseName" class="skill-name">
        <Icon :name="icon"></Icon>
        <slot v-if="!icon"></slot>
      </span>
      <span class="skill-percentage">{{ percentage }}%</span>
    </label>
  </div>
</template>

<script>
import _ from 'lodash';

import Icon from './Icon.component.vue';

const MAX_STROKE_POS = 900;

export default {
  components: { Icon },
  props: ['name', 'percentage', 'icon'],
  computed: {
    getCamelCaseName() {
      return `skill-${_.camelCase(this.name)}`;
    },
    getPercentageRatio() {
      return this.percentage / 100;
    },
    getStrokePositionCSS() {
      const strokeGap = MAX_STROKE_POS * this.getPercentageRatio;
      const strokePos = MAX_STROKE_POS - strokeGap;
      return `${strokePos} ${strokeGap}`;
    },
  },
};
</script>

<style lang="scss">
.skill-wrapper {
  position: relative;
  .skill-hex-svg {
    width: 100px;
    .hex-bg, .hex-progress {
      stroke-width: 15px;
      fill: transparent;
    }
    .hex-progress {
      stroke: $color-cyan;
      fill: darken($color-cyan, 40%);
    }
    .hex-bg {
      stroke-dashoffset: 225;
      stroke: darken($color-cyan, 40%);
      stroke-width: 10px;
    }
  }
  .skill-name-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    .skill-name {
      font-size: 20px;
      &#skill-database, &#skill-linux, &#skill-java, &#skill-aws { font-size: 26px; }
    }
  }
}
</style>

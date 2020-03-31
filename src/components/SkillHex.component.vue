<template>
  <div class="skill-wrapper">
    <Icon v-if="isProficient" name="star" class="is-proficient" v-tooltip="{ text: 'Proficient' }"></Icon>
    <svg class="skill-hex-svg" width="100%" viewBox="-5 -5 59 62">
      <path class="hex-rail" d="M47,13.9c-0.1-0.2-0.3-0.5-0.5-0.8C44.7,10.6,26.9,0.7,24.7,1c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.3,0
        C21.9,0.8,5.9,9.7,2.8,12.7c-0.5,0.5-0.8,1-0.9,1.4C0.8,17.3,0.7,33,1.7,37.3c0.2,0.8,0.7,1.7,1.5,2.3c2,1.7,7,4.7,11.6,7.2
        c3.7,2,7.2,3.7,8.8,4.1c0.6,0.1,1.2,0.1,1.8,0c1.4-0.3,4.3-1.7,7.5-3.3C38,44.9,44,41.3,46,39.5c0.6-0.6,1.1-1.3,1.3-2.1
        C48.3,33.1,48.2,16.3,47,13.9z"/>
      <path class="hex-empty" d="M47,13.9c-0.1-0.2-0.3-0.5-0.5-0.8C44.7,10.6,26.9,0.7,24.7,1c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.3,0
        C21.9,0.8,5.9,9.7,2.8,12.7c-0.5,0.5-0.8,1-0.9,1.4C0.8,17.3,0.7,33,1.7,37.3c0.2,0.8,0.7,1.7,1.5,2.3c2,1.7,7,4.7,11.6,7.2
        c3.7,2,7.2,3.7,8.8,4.1c0.6,0.1,1.2,0.1,1.8,0c1.4-0.3,4.3-1.7,7.5-3.3C38,44.9,44,41.3,46,39.5c0.6-0.6,1.1-1.3,1.3-2.1
        C48.3,33.1,48.2,16.3,47,13.9z"/>
      <path class="hex-progress" d="M47,13.9c-0.1-0.2-0.3-0.5-0.5-0.8C44.7,10.6,26.9,0.7,24.7,1c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.3,0
        C21.9,0.8,5.9,9.7,2.8,12.7c-0.5,0.5-0.8,1-0.9,1.4C0.8,17.3,0.7,33,1.7,37.3c0.2,0.8,0.7,1.7,1.5,2.3c2,1.7,7,4.7,11.6,7.2
        c3.7,2,7.2,3.7,8.8,4.1c0.6,0.1,1.2,0.1,1.8,0c1.4-0.3,4.3-1.7,7.5-3.3C38,44.9,44,41.3,46,39.5c0.6-0.6,1.1-1.3,1.3-2.1
        C48.3,33.1,48.2,16.3,47,13.9z" :style="{ strokeDasharray: getStrokePositionCSS }"/>
      <!-- <polygon class="hex-progress" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      <transition @enter="slideStrokeIn">
        <polygon class="hex-bg" points="300,150 225,280 75,280 0,150 75,20 225,20" :style="{ strokeDasharray: getStrokePositionCSS }"></polygon>
      </transition> -->
    </svg>
    <label class="skill-name-wrapper">
      <span :id="getCamelCaseName" class="skill-name">
        <Icon :name="icon" v-tooltip="{ text: name }"></Icon>
        <slot v-if="!icon"></slot>
      </span>
      <span class="skill-percentage">{{ percentage }}%</span>
    </label>
  </div>
</template>

<script>
import _ from 'lodash';

import Icon from './Icon.component.vue';

const MAX_STROKE_POS = 153.809006;

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
      const strokePos = MAX_STROKE_POS * this.getPercentageRatio;
      return `${strokePos} ${MAX_STROKE_POS - strokePos}`;
    },
    isProficient() {
      return (this.getPercentageRatio >= 0.75);
    },
  },
};
</script>

<style lang="scss">
.skill-wrapper {
  position: relative;
  .is-proficient {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
  .skill-hex-svg {
    width: 80px;
    .hex-rail, .hex-empty, .hex-progress {
      stroke: $color-cyan;
      stroke-width: 2px;
      fill: transparent;
    }
    .hex-rail {
      stroke-width: 3px;
      fill: darken($color-cyan, 40%);
    }
    .hex-empty {
      stroke: darken($color-cyan, 40%);
    }
    .hex-progress {
      stroke-dashoffset: -26.5;
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

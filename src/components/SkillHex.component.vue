<template>
  <div class="skill-wrapper">
    <svg class="skill-hex-svg" width="100%" viewBox="-5 -5 310 290">
      <polygon class="hex-progress" points="300,150 225,280 75,280 0,150 75,20 225,20"></polygon>
      <polygon class="hex-bg" points="300,150 225,280 75,280 0,150 75,20 225,20" :style="{ strokeDasharray: getStrokePositionCSS }"></polygon>
    </svg>
    <label class="skill-name-wrapper">
      <span class="skill-name"><slot></slot></span>
      <span class="skill-percentage">{{ percentage }}%</span>
    </label>
  </div>
</template>

<script>
const MAX_STROKE_POS = 900;

export default {
  props: ['percentage'],
  computed: {
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
      stroke-width: 10px;
      fill: transparent;
    }
    .hex-bg {
      stroke-dashoffset: 225;
      stroke: darken(teal, 18%);
      fill: darken(teal, 15%);
    }
    .hex-progress {
      stroke: teal;
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
      color: darken($teal, 15%);
    }
  }
}
</style>

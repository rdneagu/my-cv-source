<template>
  <div class="references-subpanel">
    <label class="title">REFERENCES</label>
    <div class="options">
      <div v-for="(option, id) in references.options" :key="id"
        class="option"
        :class="[ getReferenceSlug(option.company), { 'selected': isReferenceSelected(id) } ]"
        :style="{ backgroundImage: `url(${option.imgURI})`}"
        v-tooltip="{ text: option.company }"
        @click="selectReference(id)"></div>
    </div>
    <transition @enter="referenceEnter" @leave="referenceLeave" mode="out-in" appear>
      <div v-if="references.selected !== null" class="reference">
        <PanelField v-for="(line, id) in references.options[references.selected].lines" :key="id" v-bind="line"></PanelField>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from 'lodash';
import Velocity from 'velocity-animate';

import PanelField from '@/components/PanelField.component.vue';

export default {
  components: { PanelField },
  async mounted() {
    for (let i = 0; i < this.references.options.length; i++) {
      const img = await this.references.options[i].img(); // eslint-disable-line no-await-in-loop
      const uri = await this.getDataURI(img.default); // eslint-disable-line no-await-in-loop
      this.$set(this.references.options[i], 'imgURI', uri);
    }
  },
  data() {
    return {
      references: {
        selected: null,
        options: [
          {
            company: 'Traveltek Ltd',
            img: () => import('@/assets/images/traveltek_logo.png'),
            lines: [
              { name: 'Company', text: 'Traveltek Ltd.', icon: 'business' },
              { name: 'Position', text: 'Maintenance Team Leader', icon: 'clipboard' },
              { name: 'Name', text: '<temporarily private>' || 'Daniel Stewart', icon: 'user' },
              { name: 'Email', text: '<temporarily private>' || 'danielandrewstewart@gmail.com', icon: 'email' },
            ],
          },
          {
            company: 'McDonalds',
            img: () => import('@/assets/images/mcdonalds_logo.png'),
            lines: [
              { name: 'Company', text: 'McDonalds', icon: 'business' },
              { name: 'Position', text: 'Shift Supervisor', icon: 'clipboard' },
              { name: 'Name', text: '<temporarily private>' || 'Gurps Singh Gill', icon: 'user' },
              { name: 'Email', text: '<temporarily private>' || 'G.Singh.Gill@outlook.com', icon: 'email' },
            ],
          },
        ],
      },
    };
  },
  methods: {
    isReferenceSelected(reference) {
      return (this.references.selected === reference);
    },
    getReferenceSlug(company) {
      return _.kebabCase(company).toLowerCase();
    },
    getDataURI(img) {
      return new Promise((resolve) => {
        const image = new Image();
        image.onload = function onload() {
          const canvas = document.createElement('canvas');
          canvas.width = this.naturalWidth;
          canvas.height = this.naturalHeight;
          canvas.getContext('2d').drawImage(this, 0, 0);
          resolve(canvas.toDataURL('image/png'));
        };
        image.src = img;
      });
    },
    async selectReference(reference) {
      if (this.isReferenceSelected(reference)) {
        this.$set(this.references, 'selected', null);
      } else {
        // Hack to force the fade-out of the reference subpanel
        this.$set(this.references, 'selected', null);
        await this.$nextTick();
        this.$set(this.references, 'selected', reference);
      }
    },
    referenceEnter(el, done) {
      el.style.opacity = 0;
      Velocity(el, { opacity: 1 }, { easing: 'swing', duration: 400, complete: done });
    },
    referenceLeave(el, done) {
      Velocity(el, { opacity: 0 }, { easing: 'swing', duration: 400, complete: done });
    },
  },
};
</script>

<style lang="scss">
@import '~@/scss/_mixins';

.references-subpanel {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  .reference {
    display: flex;
    flex-direction: column;
    opacity: 0;
  }
  .options {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 8px 0;
    .option {
      width: 50px;
      height: 50px;
      border-radius: 32px;
      border: 1px solid $color-cyan;
      background-color: darken($color-cyan, 40%);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 80%;
      opacity: .4;
      cursor: pointer;
      @include transition('opacity, box-shadow', .2s, ease);
      &:hover, &.selected {
        opacity: 1;
        box-shadow: 0 0 8px $color-cyan;
      }
      &.traveltek-ltd {
        background-size: 340%;
        background-position: left center;
      }
    }
  }
}
</style>

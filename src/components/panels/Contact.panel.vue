<template>
  <div class="contact-panel">
    <div class="personal">
      <div v-for="(field, id) in personal" :key="id" class="multi-line" :class="[ id ]">
        <label v-if="field.category" class="title">{{ field.category }}:</label>
        <Personal v-for="(line, id) in field.lines" :key="id" v-bind="line"></Personal>
      </div>
    </div>
    <div class="references">

    </div>
  </div>
</template>

<script>
import Personal from '../Personal.component.vue';

export default {
  components: { Personal },
  data() {
    return {
      personal: {
        birthday: {
          category: 'Personal',
          lines: [
            { name: 'Birthday', icon: 'calendar', value: '12 January 1994' },
          ],
        },
        location: {
          lines: [
            { name: 'Address', icon: 'location', value: '2/2 18 Oban Drive, G20 6AF' },
            { name: 'Country', icon: 'location', value: 'Scotland, Glasgow' },
          ],
        },
        contact: {
          lines: [
            { name: 'Phone', icon: 'phone', value: '+44 7518 885 1558' },
            { name: 'Email', icon: 'email', value: 'robertneagu194@gmail.com' },
          ],
        },
        social: {
          category: 'Social',
          lines: [
            { name: 'LinkedIn', icon: 'linkedin', value: 'rdneagu', href: 'https://www.linkedin.com/in/rdneagu/' },
          ],
        },
        repository: {
          category: 'Repositories',
          lines: [
            { name: 'GitHub', icon: 'github', value: 'rdneagu', href: 'https://github.com/rdneagu', active: true },
            { name: 'GitHub', icon: 'github', value: 'chosen111', href: 'https://github.com/chosen111', inactive: true },
            { name: 'BitBucket', icon: 'bitbucket', value: 'chosen112', href: 'https://bitbucket.org/chosen112', inactive: true },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss">
/**
 * Skills
 */
.contact-panel {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  .personal {
    display: flex;
    flex-direction: column;
    .multi-line {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 14px;
        font-weight: 600;
        margin: 0 8px;
        padding: 4px 0;
        text-align: left;
      }
      .line {
        display: flex;
        align-items: center;
        background: rgba(#000, .2);
        padding: 5px 10px;
        margin: 2px 0;
        .icon-wrapper:nth-child(1) { padding-right: 10px; }
        .value {
          flex: 1;
          padding-left: 10px;
          font-size: 14px;
          font-weight: 600;
          text-align: left;
        }
        .icon-wrapper:nth-child(3) {
          padding: 0 5px;
          .icon-alert { color: $color-error; }
        }
      }
    }
  }
}
</style>

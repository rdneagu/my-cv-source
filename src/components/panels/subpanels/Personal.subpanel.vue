<template>
  <div class="personal-subpanel">
    <div v-for="(field, id) in personal" :key="id" class="multi-line" :class="[ id ]">
      <label v-if="field.category" class="title">{{ field.category }}</label>
      <PanelField v-for="(line, id) in field.lines" :key="id" v-bind="line"></PanelField>
    </div>
  </div>
</template>

<script>
import PanelField from '@/components/PanelField.component.vue';

export default {
  components: { PanelField },
  data() {
    return {
      personal: {
        birthday: {
          category: 'PERSONAL',
          lines: [
            { name: 'Birthday', text: '12 January 1994', icon: 'calendar' },
          ],
        },
        location: {
          lines: [
            { name: 'Address', text: '2/2 18 Oban Drive, G20 6AF', icon: 'location' },
            { name: 'Country', text: 'Scotland, Glasgow', icon: 'location' },
          ],
        },
        contact: {
          lines: [
            { name: 'Phone', text: '+44 7518 885 1558', icon: 'phone' },
            { name: 'Email', text: 'robertneagu194@gmail.com', icon: 'email' },
          ],
        },
        social: {
          category: 'SOCIAL',
          lines: [
            { name: 'LinkedIn', text: 'rdneagu', icon: 'linkedin', href: 'https://www.linkedin.com/in/rdneagu/' },
          ],
        },
        repository: {
          category: 'REPOSITORIES',
          lines: [
            { name: 'GitHub', text: 'rdneagu', icon: 'github', href: 'https://github.com/rdneagu', active: true },
            { name: 'GitHub', text: 'chosen111', icon: 'github', href: 'https://github.com/chosen111', inactive: true },
            { name: 'BitBucket', text: 'chosen112', icon: 'bitbucket', href: 'https://bitbucket.org/chosen112', inactive: true },
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss">
@import '~@/scss/_mixins';

.personal-subpanel {
    display: flex;
    flex-direction: column;
    .multi-line {
      display: flex;
      flex-direction: column;
    }
  }
</style>

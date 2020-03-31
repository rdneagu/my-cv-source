<template>
  <div class="contact-panel">
    <Personal></Personal>
    <References></References>
  </div>
</template>

<script>
import References from '@/components/panels/subpanels/References.subpanel.vue';
import Personal from '@/components/panels/subpanels/Personal.subpanel.vue';

export default {
  components: { Personal, References },
};
</script>

<style lang="scss">
@import '~@/scss/_mixins';

.contact-panel {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  .title {
    padding: 5px 8px;
    align-self: center;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>

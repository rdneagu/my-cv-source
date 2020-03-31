<template>
  <div class="panel-field" :class="[ name.toLowerCase() ]">
    <Icon :name="icon" v-tooltip="{ text: name }"></Icon>
    <template>
      <a v-if="href" :href="href" class="text">{{ text }}</a>
      <span v-else class="text">{{ text }}</span>
    </template>
    <Icon v-if="active" name="star" v-tooltip="{ text: 'Active' }"></Icon>
    <Icon v-if="inactive" name="alert" type="alert" v-tooltip="{ text: 'Inactive', type: 'alert' }"></Icon>
  </div>
</template>

<script>
import Icon from '@/components/Icon.component.vue';

export default {
  components: { Icon },
  props: ['name', 'icon', 'text', 'href', 'active', 'inactive'],
};
</script>

<style lang="scss">
.panel-field {
  display: flex;
  align-items: center;
  background: rgba(#000, .2);
  padding: 5px 10px;
  margin: 2px 0;
  .icon-wrapper:nth-child(1) { padding-right: 10px; }
  .text {
    flex: 1;
    padding-left: 10px;
    font-size: 13px;
    font-weight: 600;
    text-align: left;
  }
  .icon-wrapper:nth-child(3) {
    padding: 0 5px;
    .icon-alert { color: $color-error; }
  }
}
</style>

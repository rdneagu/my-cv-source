<template>
  <div class="line" :class="[ name.toLowerCase() ]">
    <Icon :name="icon" v-tooltip="{ text: name }"></Icon>
    <template>
      <a v-if="href" :href="href" class="value">{{ value }}</a>
      <span v-else class="value">{{ value }}</span>
    </template>
    <Icon v-if="active" name="star" v-tooltip="{ text: 'Active' }"></Icon>
    <Icon v-if="inactive" name="alert" type="alert" v-tooltip="{ text: 'Inactive', type: 'alert' }"></Icon>
  </div>
</template>

<script>
import Icon from './Icon.component.vue';

export default {
  components: { Icon },
  props: ['name', 'icon', 'value', 'href', 'active', 'inactive'],
};
</script>

<style lang="scss">

</style>

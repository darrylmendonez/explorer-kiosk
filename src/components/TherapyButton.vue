<template>
  <button class="btn-therapy">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'TherapyButton',
};
</script>

<style lang="scss" scoped>
.btn-therapy {
  border: 1px solid $blue-dark;
  background: $blue-dark;
  color: $white;
  padding: 1.5rem 3rem;
  border-radius: 25px;
  font-size: 40px;
  line-height: 1;
  margin: 1rem auto;

  &:active,
  &.active {
    border: 1px solid $grey-dark;
    color: $blue-dark;
    background: none;
  }
}
</style>


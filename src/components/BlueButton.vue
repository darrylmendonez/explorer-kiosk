<template>
  <button class="btn-blue">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.btn-blue {
  background: $blue-dark;
  text-transform: uppercase;
  color: $white;
  border: none;
  font-size: 1.8rem;
  padding: 1rem 3rem;
  box-shadow: 0 5px 5px rgba($color: #000, $alpha: 0.2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }
}
</style>


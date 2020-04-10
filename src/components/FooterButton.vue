<template>
  <button class="btn-footer">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FooterButton"
};
</script>

<style lang="scss" scoped>
.btn-footer {
  background: lightgrey;
  display: inline-flex;
  width: 5.5rem;
  height: 5.5rem;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  -webkit-user-select: none;

  .icon-refs {
    width: 50%;
  }

  .icon-home {
    width: 66%;
    position: relative;
    top: -1px;
  }
}
</style>


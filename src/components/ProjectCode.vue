<template>
  <div class="project-code">
    <p class="date">
      &copy; 2019 Company Corporation<br v-if="!$route.params.id">
      10/19
    </p>
  </div>
</template>


<style lang="scss" scoped>
.project-code {
  text-align: right;
  .date {
    font-size: 22px;
  }
  .date span,
  .code {
    margin-left: 0.6rem;
  }
}
</style>